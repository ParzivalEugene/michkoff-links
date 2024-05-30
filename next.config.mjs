/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.spotifycdn.com",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
