// Set by the GitHub Actions workflow for the GitHub Pages build.
// Locally (npm run dev) it's empty, so the site runs at http://localhost:3000
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML into /out — required for GitHub Pages
  reactStrictMode: true,
  trailingSlash: true, // /privacy/ -> privacy/index.html
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true }, // image optimizer needs a server
};

module.exports = nextConfig;
