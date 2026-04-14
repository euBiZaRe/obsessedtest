import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/obsessedtest',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'obsessedbrand.uk',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
};

export default nextConfig;
