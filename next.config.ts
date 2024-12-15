import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true, // Set ke true jika ini redirect permanen (301), false untuk redirect sementara (307)
      },
    ];
  },
};

export default nextConfig;
