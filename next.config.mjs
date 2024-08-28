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
            port: '', // Specify your server's port
            pathname: '/upload/**',
          },
      ],
    },
  };
  
  export default nextConfig;
  