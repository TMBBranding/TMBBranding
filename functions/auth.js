export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(request.url);
  const provider = url.searchParams.get('provider') || 'github';

  if (provider !== 'github') {
    return new Response('Unsupported provider', { status: 400 });
  }

  const clientId = env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response(
      'Missing GITHUB_CLIENT_ID environment variable in Cloudflare Pages settings.',
      {
        status: 500,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      }
    );
  }

  // Generate random CSRF token
  const csrfToken = crypto.randomUUID().replace(/-/g, '');

  const redirectUri = `${url.origin}/callback`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    state: csrfToken,
  });

  const githubAuthUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: githubAuthUrl,
      'Set-Cookie': `csrf-token=github_${csrfToken}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax; Secure`,
    },
  });
}
