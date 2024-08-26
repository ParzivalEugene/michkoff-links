/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.spotifycdn.com",
      },
    ],
  },
};

export default nextConfig;
