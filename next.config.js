/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    runtime: "experimental-edge",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skins.mcstats.com",
      },
    ],
  },
};
