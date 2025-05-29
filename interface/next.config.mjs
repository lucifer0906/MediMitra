/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'medimitra-backend.up.railway.app'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
      },
    ];
  },
};

export default nextConfig;
