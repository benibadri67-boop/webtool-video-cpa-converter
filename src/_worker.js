/**
 * Cloudflare Pages Advanced Mode Worker (_worker.js)
 * Handles API routes for Slicedrivee shortening proxy & serves static assets
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // API Route: Shorten via Slicedrivee
    if (url.pathname === "/api/cpa/shorten-slicedrivee") {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
          status: 405,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
      }

      try {
        const req = await request.json();
        const real_url = (req.real_url || "").trim();
        const subdomain = (req.subdomain || "cdn2").trim();
        const alias = (req.alias || "").trim();

        if (!real_url) {
          return new Response(JSON.stringify({ error: "real_url is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
          });
        }

        const formData = new URLSearchParams();
        formData.append("mode", "single");
        formData.append("subdomain", subdomain);
        formData.append("real_url", real_url);
        formData.append("id", alias);
        formData.append("submit", "1");

        const resp = await fetch("https://slicedrivee.site/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
          body: formData.toString(),
        });

        const html = await resp.text();
        const match = html.match(/onclick="cp\('([^']+)',this\)"/);
        let shortlink = "";

        if (match && match[1]) {
          shortlink = match[1];
        } else {
          const idMatch = html.match(/<td class="td-m">([^<]+)<\/td>/);
          if (idMatch && idMatch[1]) {
            shortlink = `https://${subdomain}.slicedrivee.site/${idMatch[1].trim()}`;
          } else {
            return new Response(JSON.stringify({ error: "Gagal membuat shortlink di slicedrivee.site" }), {
              status: 500,
              headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            });
          }
        }

        return new Response(
          JSON.stringify({
            success: true,
            shortlink: shortlink,
            destination: real_url,
          }),
          {
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
          }
        );
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
      }
    }

    // Default: Serve static assets (HTML, CSS, JS)
    return env.ASSETS.fetch(request);
  },
};
