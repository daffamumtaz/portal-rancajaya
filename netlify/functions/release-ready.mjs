import {
  RELEASE_READY,
  RELEASE_PUBLISHED,
  collectionFromContentPath,
  extractMediaReferences,
  isReleaseContentPath,
  readReleaseMetadata,
  transformForPublication,
  validateReadyContent,
} from './lib/release-core.mjs';

const githubApi = 'https://api.github.com';
const contentBranch = process.env.RELEASE_BRANCH || 'main';

class HttpError extends Error {
  constructor(status, message, details = undefined) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function getRepositoryConfig() {
  const repository = process.env.GITHUB_REPOSITORY || '';
  const [repositoryOwner, repositoryName] = repository.split('/');
  const owner = process.env.GITHUB_OWNER || repositoryOwner;
  const name = process.env.GITHUB_REPO || repositoryName;
  const token = process.env.GITHUB_TOKEN;

  if (!owner || !name || !token) {
    throw new HttpError(503, 'Batch release belum dikonfigurasi di server.', {
      required: ['GITHUB_TOKEN', 'GITHUB_OWNER/GITHUB_REPO', 'RELEASE_PUBLISHER_EMAILS'],
    });
  }

  return { owner, name, token };
}

function getAuthenticatedUser(context) {
  const user = context.clientContext?.user;
  if (!user) throw new HttpError(401, 'Sesi admin tidak ditemukan. Silakan masuk kembali.');

  const roles = new Set([
    ...(Array.isArray(user.roles) ? user.roles : []),
    ...(Array.isArray(user.app_metadata?.roles) ? user.app_metadata.roles : []),
  ]);
  const allowedEmails = new Set(
    (process.env.RELEASE_PUBLISHER_EMAILS || '')
      .split(',')
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
  const email = String(user.email || '').toLowerCase();

  if (!roles.has('publisher') && !roles.has('admin') && !allowedEmails.has(email)) {
    throw new HttpError(403, 'Akun ini belum memiliki hak Publisher.');
  }

  return { email: user.email || 'Publisher', roles: [...roles] };
}

async function githubRequest(path, config, options = {}) {
  const response = await fetch(`${githubApi}/repos/${config.owner}/${config.name}${path}`, {
    ...options,
    headers: {
      accept: 'application/vnd.github+json',
      authorization: `Bearer ${config.token}`,
      'x-github-api-version': '2022-11-28',
      ...(options.headers || {}),
    },
  });
  const raw = await response.text();
  let body;

  try {
    body = raw ? JSON.parse(raw) : {};
  } catch {
    body = { message: raw || 'Respons GitHub tidak valid.' };
  }

  if (!response.ok) {
    throw new HttpError(response.status, body.message || 'GitHub API gagal.', body);
  }

  return body;
}

function branchPath(branch) {
  return branch.split('/').map(encodeURIComponent).join('/');
}

async function getBranchSnapshot(config) {
  const ref = await githubRequest(`/git/ref/heads/${branchPath(contentBranch)}`, config);
  const commit = await githubRequest(`/git/commits/${ref.object.sha}`, config);
  const tree = await githubRequest(`/git/trees/${commit.tree.sha}?recursive=1`, config);

  if (tree.truncated) throw new HttpError(503, 'Daftar berkas repository terlalu besar untuk diproses sekaligus.');

  const entries = new Map(
    tree.tree
      .filter((entry) => entry.type === 'blob')
      .map((entry) => [entry.path, entry]),
  );

  return { headSha: ref.object.sha, treeSha: commit.tree.sha, entries };
}

async function readBlob(config, sha, asText = true) {
  const blob = await githubRequest(`/git/blobs/${sha}`, config);
  const value = Buffer.from(blob.content.replace(/\s/g, ''), 'base64');
  return asText ? value.toString('utf8') : value;
}

async function findReadyEntries(config, snapshot) {
  const candidates = [...snapshot.entries.values()].filter((entry) => isReleaseContentPath(entry.path));
  const entries = await Promise.all(candidates.map(async (entry) => {
    const source = await readBlob(config, entry.sha);
    let metadata;
    try {
      metadata = readReleaseMetadata(source, entry.path);
    } catch (error) {
      return {
        path: entry.path,
        collection: collectionFromContentPath(entry.path),
        title: entry.path,
        releaseStatus: RELEASE_READY,
        issues: [error instanceof Error ? error.message : 'Berkas tidak dapat dibaca.'],
        source,
      };
    }
    const issues = metadata.releaseStatus === RELEASE_READY ? validateReadyContent(source, entry.path) : [];

    return {
      path: entry.path,
      collection: collectionFromContentPath(entry.path),
      title: metadata.title || entry.path,
      releaseStatus: metadata.releaseStatus,
      issues,
      source,
    };
  }));

  return entries.filter((entry) => entry.releaseStatus === RELEASE_READY);
}

async function buildRelease(config, snapshot, readyEntries, publisher) {
  if (readyEntries.length === 0) {
    throw new HttpError(422, 'Belum ada konten berstatus Siap untuk diterbitkan.');
  }

  const issues = readyEntries.flatMap((entry) => entry.issues.map((issue) => ({ path: entry.path, issue })));
  if (issues.length > 0) {
    throw new HttpError(422, 'Ada entri Siap yang belum lolos validasi.', { issues });
  }

  const publishedAt = new Date().toISOString();
  const treeEntries = readyEntries.map((entry) => ({
    path: entry.path,
    mode: '100644',
    type: 'blob',
    content: transformForPublication(entry.source, entry.path, publishedAt),
  }));

  const referencedMedia = new Set(readyEntries.flatMap((entry) => extractMediaReferences(entry.source)));
  const missingMedia = [...referencedMedia].filter((path) => !snapshot.entries.has(path));
  if (missingMedia.length > 0) {
    throw new HttpError(422, 'Ada media yang dirujuk tetapi belum ada di repository.', { paths: missingMedia });
  }

  const latest = await githubRequest(`/git/ref/heads/${branchPath(contentBranch)}`, config);
  if (latest.object.sha !== snapshot.headSha) {
    throw new HttpError(409, 'Konten berubah saat rilis disiapkan. Muat ulang daftar Ready lalu coba lagi.');
  }

  const tree = await githubRequest('/git/trees', config, {
    method: 'POST',
    body: JSON.stringify({ base_tree: snapshot.treeSha, tree: treeEntries }),
    headers: { 'content-type': 'application/json' },
  });
  const commit = await githubRequest('/git/commits', config, {
    method: 'POST',
    body: JSON.stringify({
      message: `Rilis batch: ${readyEntries.length} entri oleh ${publisher.email}`,
      tree: tree.sha,
      parents: [snapshot.headSha],
    }),
    headers: { 'content-type': 'application/json' },
  });
  const updated = await githubRequest(`/git/refs/heads/${branchPath(contentBranch)}`, config, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commit.sha, force: false }),
    headers: { 'content-type': 'application/json' },
  });

  return {
    commitSha: commit.sha,
    commitUrl: commit.html_url,
    branch: updated.ref.replace('refs/heads/', ''),
    publishedAt,
    publishedCount: readyEntries.length,
    collections: [...new Set(readyEntries.map((entry) => entry.collection).filter(Boolean))],
    status: RELEASE_PUBLISHED,
  };
}

export default async (request, context) => {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204 });
  if (!['GET', 'POST'].includes(request.method)) return json({ message: 'Metode tidak didukung.' }, 405);

  try {
    const publisher = getAuthenticatedUser(context);
    const config = getRepositoryConfig();
    const snapshot = await getBranchSnapshot(config);
    const readyEntries = await findReadyEntries(config, snapshot);

    if (request.method === 'GET') {
      return json({
        ok: true,
        branch: contentBranch,
        readyCount: readyEntries.length,
        valid: readyEntries.every((entry) => entry.issues.length === 0),
        entries: readyEntries.map(({ path, collection, title, issues }) => ({ path, collection, title, issues })),
        publisher,
      });
    }

    const payload = await request.json().catch(() => ({}));
    if (payload.confirm !== true) return json({ message: 'Konfirmasi rilis belum diberikan.' }, 400);
    return json({ ok: true, ...(await buildRelease(config, snapshot, readyEntries, publisher)) });
  } catch (error) {
    const status = error instanceof HttpError ? error.status : 500;
    return json({
      ok: false,
      message: error instanceof Error ? error.message : 'Batch release gagal.',
      details: error instanceof HttpError ? error.details : undefined,
    }, status);
  }
};
