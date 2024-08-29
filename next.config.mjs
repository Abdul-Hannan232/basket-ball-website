/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Explicitly set strict mode
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2023', // Specify your server's port
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'backend.basketball.mayonity.com',
        port: '', // Leave empty for default HTTPS port (443)
        pathname: '/upload/**',
      },
    ],
  },
};

export default nextConfig;
