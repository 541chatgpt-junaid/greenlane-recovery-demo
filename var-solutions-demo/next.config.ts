import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Demo photos are served from Pexels until real before/after shots are added to /public.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
