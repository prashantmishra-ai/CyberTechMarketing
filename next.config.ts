import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR from local network and ngrok tunnel
  allowedDevOrigins: [
    '192.168.1.12',
    'detection-hemstitch-work.ngrok-free.dev',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
