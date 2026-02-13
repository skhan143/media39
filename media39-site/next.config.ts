import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/media39",
  assetPrefix: "/media39/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
