import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickyrestaurants.com',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;