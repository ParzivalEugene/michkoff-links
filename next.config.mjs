/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.spotifycdn.com",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
