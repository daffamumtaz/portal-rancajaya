import crypto from 'node:crypto';

const base64url = value => Buffer.from(value).toString('base64url');

function verifyState(state, secret) {
  const [payload, signature] = String(state || '').split('.');
  if (!payload || !signature) throw new Error('State OAuth tidak valid.');
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  if (signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    throw new Error('State OAuth tidak cocok.');
  }
  const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
  if (!parsed.exp || parsed.exp < Date.now() || parsed.provider !== 'github') {
    throw new Error('Sesi OAuth telah kedaluwarsa.');
  }
  return parsed;
}

export default async request => {
  try {
    const url = new URL(request.url);
    const oauthError = url.searchParams.get('error');
    if (oauthError) throw new Error(url.searchParams.get('error_description') || oauthError);

    const code = url.searchParams.get('code');
    const secret = process.env.AUTH_STATE_SECRET;
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const oauthOrigin = process.env.OAUTH_ORIGIN?.replace(/\/$/, '');
    const cmsOrigin = process.env.CMS_ORIGIN?.replace(/\/$/, '');
    if (!code || !secret || !clientId || !clientSecret || !oauthOrigin || !cmsOrigin) {
      throw new Error('Parameter atau variabel OAuth belum lengkap.');
    }

    verifyState(url.searchParams.get('state'), secret);
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: `${oauthOrigin}/.netlify/functions/callback`,
      }),
    });
    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok || !tokenData.access_token) {
      throw new Error(tokenData.error_description || tokenData.error || 'GitHub tidak mengembalikan token.');
    }

    const payload = base64url(JSON.stringify({ token: tokenData.access_token }));
    const redirectUrl = `${cmsOrigin}/admin/oauth-callback.html#payload=${payload}`;
    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    return new Response(`Login GitHub gagal: ${error.message}`, {
      status: 400,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
        'cross-origin-opener-policy': 'unsafe-none',
      },
    });
  }
};
