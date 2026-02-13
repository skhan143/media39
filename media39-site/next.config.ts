import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/media39-site",
  assetPrefix: "/media39-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
