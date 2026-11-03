export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  // Verify CSRF token from cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(/\bcsrf-token=github_([0-9a-f]{32})\b/);
  const csrfToken = match ? match[1] : null;

  if (!code || !state) {
    return outputHTML({
      error: 'Failed to receive authorization code from GitHub.',
      errorCode: 'AUTH_CODE_REQUEST_FAILED',
    });
  }

  if (!csrfToken || state !== csrfToken) {
    return outputHTML({
      error: 'Potential CSRF attack detected. Authentication flow aborted.',
      errorCode: 'CSRF_DETECTED',
    });
  }

  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return outputHTML({
      error:
        'GitHub OAuth credentials (GITHUB_CLIENT_ID and/or GITHUB_CLIENT_SECRET) are missing in Cloudflare Pages environment variables.',
      errorCode: 'MISCONFIGURED_CLIENT',
    });
  }

  let tokenResponse;
  try {
    tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'TMB-Branding-CMS',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
  } catch (err) {
    return outputHTML({
      error: 'Failed to connect to GitHub OAuth token endpoint.',
      errorCode: 'TOKEN_REQUEST_FAILED',
    });
  }

  let tokenData;
  try {
    tokenData = await tokenResponse.json();
  } catch {
    return outputHTML({
      error: 'Malformed response received from GitHub OAuth token endpoint.',
      errorCode: 'MALFORMED_RESPONSE',
    });
  }

  if (tokenData.error) {
    return outputHTML({
      error: tokenData.error_description || tokenData.error,
      errorCode: tokenData.error,
    });
  }

  const token = tokenData.access_token;
  if (!token) {
    return outputHTML({
      error: 'No access token returned by GitHub.',
      errorCode: 'NO_TOKEN',
    });
  }

  return outputHTML({ token });
}

function outputHTML({ token, error, errorCode }) {
  const state = error ? 'error' : 'success';
  const content = error
    ? { provider: 'github', error, errorCode }
    : { provider: 'github', token };

  const messagePayload = `authorization:github:${state}:${JSON.stringify(content)}`;

  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Sveltia CMS Authentication</title>
  </head>
  <body>
    <script>
      (() => {
        const messagePayload = ${JSON.stringify(messagePayload)};
        window.addEventListener('message', ({ data, origin }) => {
          if (data !== 'authorizing:github') {
            return;
          }
          window.opener?.postMessage(messagePayload, origin);
        });
        window.opener?.postMessage('authorizing:github', '*');
      })();
    </script>
    <p style="font-family: sans-serif; text-align: center; margin-top: 50px;">
      ${
        error
          ? 'Authentication error: ' + error
          : 'Authentication successful. You can close this window if it does not close automatically.'
      }
    </p>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Set-Cookie':
        'csrf-token=deleted; HttpOnly; Max-Age=0; Path=/; SameSite=Lax; Secure',
    },
  });
}
