import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoBase = "/mjv-realty-demo";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? repoBase : "",
  assetPrefix: isGitHubPages ? repoBase : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
