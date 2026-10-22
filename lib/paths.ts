// When the site is hosted under a sub-path (GitHub Pages project site:
// /raah-e-bahisht-website), plain <a href> and <Image src> don't get the
// prefix automatically. Wrap every absolute path in asset() so it works both
// locally (no prefix) and on GitHub Pages (prefix set by the deploy workflow).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;

// Origin only (no sub-path) — used for metadata / sitemap.
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://shayanhussain-kazmi.github.io";

// Full public URL of the site root, with the sub-path.
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
