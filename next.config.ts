import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },

      // ⭐ REQUIRED for YouTube embeds & thumbnails
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
      },

      // ⭐ REQUIRED for Loom preview frames
      {
        protocol: "https",
        hostname: "www.loom.com",
      },
      {
        protocol: "https",
        hostname: "cdn.loom.com",
      },
    ],
  },
};

export default nextConfig;
