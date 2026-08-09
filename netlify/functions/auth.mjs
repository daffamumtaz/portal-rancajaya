import crypto from 'node:crypto';

const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const base64url = value => Buffer.from(value).toString('base64url');

function sign(value, secret) {
  return crypto.createHmac('sha256', secret).update(value).digest('base64url');
}

function configuredOrigin() {
  const origin = process.env.OAUTH_ORIGIN;
  if (!origin) throw new Error('OAUTH_ORIGIN belum diatur.');
  return origin.replace(/\/$/, '');
}

export default async request => {
  try {
    const url = new URL(request.url);
    const cmsOrigin = configuredOrigin();
    const provider = url.searchParams.get('provider');
    const scope = url.searchParams.get('scope') === 'public_repo' ? 'public_repo' : 'repo';
    const clientId = process.env.GITHUB_CLIENT_ID;
    const stateSecret = process.env.AUTH_STATE_SECRET;

    if (provider !== 'github') {
      return new Response('Provider OAuth tidak didukung.', { status: 400 });
    }
    if (!clientId || !stateSecret) {
      throw new Error('Variabel OAuth Netlify belum lengkap.');
    }

    const callbackUrl = `${configuredOrigin()}/.netlify/functions/callback`;
    const payload = base64url(json({
      provider,
      scope,
      exp: Date.now() + 10 * 60 * 1000,
      nonce: crypto.randomBytes(24).toString('base64url'),
    }));
    const state = `${payload}.${sign(payload, stateSecret)}`;
    const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
    authorizeUrl.searchParams.set('client_id', clientId);
    authorizeUrl.searchParams.set('redirect_uri', callbackUrl);
    authorizeUrl.searchParams.set('scope', scope);
    authorizeUrl.searchParams.set('state', state);

    // Decap terlebih dahulu melakukan handshake. Pada titik ini opener masih
    // tersedia; pemulihan setelah GitHub dilakukan oleh BroadcastChannel.
    const document = `<!doctype html><meta charset="utf-8"><title>Menghubungkan ke GitHub…</title><p>Menghubungkan ke GitHub…</p><script>
      const targetOrigin = ${json(cmsOrigin)};
      const authorizeUrl = ${json(authorizeUrl.href)};
      if (!window.opener) {
        document.body.textContent = 'Login harus dimulai dari halaman admin Decap.';
      } else {
        window.opener.postMessage('authorizing:github', targetOrigin);
        window.addEventListener('message', event => {
          if (event.origin === targetOrigin && event.data === 'authorizing:github') {
            window.location.replace(authorizeUrl);
          }
        }, { once: true });
      }
    </script>`;

    return new Response(document, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
        'cross-origin-opener-policy': 'unsafe-none',
      },
    });
  } catch (error) {
    return new Response(`Konfigurasi OAuth gagal: ${error.message}`, { status: 500 });
  }
};
