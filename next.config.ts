import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/advisor',
        destination: 'http://triply-api.azurewebsites.net/advisor', // Proxy to external API
      },
    ];
  },
};

export default nextConfig;
