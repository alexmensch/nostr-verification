export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/.well-known/nostr.json') {
      const nostrData = {
        names: {
          [env.NOSTR_NAME]: env.NOSTR_PUBLIC_KEY
        }
      };

      if (env.NOSTR_RELAYS) {
        try {
          const relays = JSON.parse(env.NOSTR_RELAYS);
          nostrData.relays = {
            [env.NOSTR_PUBLIC_KEY]: relays
          };
        } catch (e) {
          console.error('Error parsing NOSTR_RELAYS:', e);
        }
      }

      const response = new Response(JSON.stringify(nostrData, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'public, max-age=3600'
        }
      });

      return response;
    }

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
};