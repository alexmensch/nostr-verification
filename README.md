# Nostr Verification on Cloudflare

If you have a custom domain that you manage on Cloudflare, this is a simple (and free) way to verify yourself.

## Steps

1. Clone this repository locally
2. Replace `yourdomain.com`, `YOUR_NOSTR_NAME`, and `YOUR_NOSTR_PUBLIC_KEY_IN_HEX_FORMAT` in [wrangler.toml]
3. `pnpm install wrangler`
4. `pnpm wrangler login`
5. `pnpm wrangler deploy`

That's it! You can then verify yourself using the value you set for `YOUR_NOSTR_NAME` at your domain. ie. `YOUR_NOSTR_NAME@yourdomain.com`.

## Converting your `npub` key to hex format

You can use this tool to do the conversion: [https://www.nostrly.com/public-key-converter/](https://www.nostrly.com/public-key-converter/).
