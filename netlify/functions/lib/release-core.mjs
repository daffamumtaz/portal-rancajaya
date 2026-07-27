export const RELEASE_READY = "Siap";
export const RELEASE_PUBLISHED = "Terbit";

const contentPathPatterns = [
  /^src\/content\/berita\/[^/]+\.md$/,
  /^src\/content\/struktur-organisasi\/[^/]+\.md$/,
  /^src\/content\/dusun\/[^/]+\.md$/,
  /^src\/content\/apbdes\/[^/]+\.md$/,
  /^src\/content\/potensi-statistik\/[^/]+\.md$/,
  /^src\/content\/kelompok-tani\/[^/]+\.md$/,
  /^src\/content\/umkm\/[^/]+\.md$/,
  /^src\/content\/layanan-administrasi\/[^/]+\.md$/,
  /^src\/content\/kontak\/[^/]+\.md$/,
  /^src\/content\/faq\/[^/]+\.md$/,
  /^src\/content\/galeri\/[^/]+\.md$/,
  /^src\/content\/pengaturan\/umum\.json$/,
  /^src\/content\/halaman\/(beranda|profil|pertanian|layanan)\.json$/,
];

const mediaPathPattern = /^public\/images\/uploads\/[^/]+\.(avif|gif|jpe?g|pdf|png|svg|webp)$/i;

export function isReleaseContentPath(path) {
  return contentPathPatterns.some((pattern) => pattern.test(path));
}

export function isReleaseMediaPath(path) {
  return mediaPathPattern.test(path);
}

export function extractMediaReferences(source) {
  const references = new Set();
  const pattern = /(?:^|["'(\s])\/?(images\/uploads\/[A-Za-z0-9._/-]+)/g;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    references.add(`public/${match[1]}`);
  }

  return [...references];
}

export function collectionFromContentPath(path) {
  const match = path.match(/^src\/content\/([^/]+)\/[^/]+\.(?:md|json)$/);
  return match ? match[1] : undefined;
}

export function classifyReleasePath(path) {
  if (isReleaseContentPath(path)) return "content";
  if (isReleaseMediaPath(path)) return "media";
  return "unsupported";
}

function normalizeScalar(value) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed.replace(/\s+#.*$/, "").trim();
}

function extractFrontmatter(source) {
  const match = source.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)(\r?\n|$)/);
  if (!match) return undefined;

  return {
    opening: match[1],
    body: match[2],
    closing: match[3],
    trailing: match[4],
    remainder: source.slice(match[0].length),
  };
}

function readYamlScalar(frontmatter, key) {
  const pattern = new RegExp(`^${key}:\\s*(.+?)\\s*$`, "m");
  const match = frontmatter.match(pattern);
  return match ? normalizeScalar(match[1]) : undefined;
}

function writeYamlScalar(frontmatter, key, value, eol) {
  const pattern = new RegExp(`^${key}:\\s*.*$`, "m");
  const serialized = `${key}: "${value}"`;
  if (pattern.test(frontmatter)) return frontmatter.replace(pattern, serialized);
  return `${frontmatter}${frontmatter ? eol : ""}${serialized}`;
}

export function readReleaseMetadata(source, path) {
  if (path.endsWith(".json")) {
    const data = JSON.parse(source);
    return {
      title: data.title || data.nama || data.judul || data.label || data.pertanyaan,
      releaseStatus: data.release_status,
      values: data,
    };
  }

  const frontmatter = extractFrontmatter(source);
  if (!frontmatter) throw new Error("Berkas Markdown tidak memiliki frontmatter.");

  const values = Object.fromEntries([
    "title",
    "nama",
    "judul",
    "label",
    "pertanyaan",
    "release_status",
    "tahun",
    "jumlah",
    "link",
    "foto",
    "parent",
  ].map((key) => [key, readYamlScalar(frontmatter.body, key)]));

  return {
    title: values.title || values.nama || values.judul || values.label || values.pertanyaan,
    releaseStatus: values.release_status,
    values,
  };
}

export function validateReadyContent(source, path) {
  const issues = [];
  let metadata;

  try {
    metadata = readReleaseMetadata(source, path);
  } catch (error) {
    return [error instanceof Error ? error.message : "Berkas tidak dapat dibaca."];
  }

  if (metadata.releaseStatus !== RELEASE_READY) {
    issues.push('Status Rilis Batch harus bernilai "Siap".');
  }

  if (!metadata.title) {
    issues.push("Judul atau identitas entri belum tersedia.");
  }

  if (path.includes("/apbdes/")) {
    const year = Number(metadata.values.tahun);
    const amount = Number(metadata.values.jumlah);
    if (!Number.isInteger(year) || year < 2000 || year > 2100) issues.push("Tahun Anggaran APBDes tidak valid.");
    if (!Number.isFinite(amount) || amount < 0) issues.push("Jumlah Rupiah APBDes harus bernilai nol atau lebih.");
  }

  if (path.includes("/layanan-administrasi/") && metadata.values.link) {
    const link = metadata.values.link;
    const validLink = (link.startsWith("/") && !link.startsWith("//")) || /^https?:\/\//i.test(link);
    if (!validLink) issues.push("Link formulir harus menggunakan URL http(s) atau path internal yang diawali /.");
  }

  if (path.includes("/galeri/") && !metadata.values.foto) {
    issues.push("Foto galeri wajib tersedia.");
  }

  if (path.includes("/struktur-organisasi/")) {
    const slug = path.split("/").pop().replace(/\.md$/, "");
    if (metadata.values.parent === slug) issues.push("Atasan langsung tidak boleh menunjuk ke posisi sendiri.");
  }

  return issues;
}

export function transformForPublication(source, path, publishedAt) {
  if (path.endsWith(".json")) {
    const data = JSON.parse(source);
    data.release_status = RELEASE_PUBLISHED;
    data.published_at = publishedAt;
    return `${JSON.stringify(data, null, 2)}\n`;
  }

  const frontmatter = extractFrontmatter(source);
  if (!frontmatter) throw new Error("Berkas Markdown tidak memiliki frontmatter.");

  const eol = source.includes("\r\n") ? "\r\n" : "\n";
  let body = writeYamlScalar(frontmatter.body, "release_status", RELEASE_PUBLISHED, eol);
  body = writeYamlScalar(body, "published_at", publishedAt, eol);
  return `${frontmatter.opening}${body}${frontmatter.closing}${frontmatter.trailing}${frontmatter.remainder}`;
}
