/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image-cdn-ak.spotifycdn.com",
      },
    ],
  },
};

export default nextConfig;
