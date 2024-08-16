/** @type {import('next').NextConfig} */
const nextConfig = {
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
  