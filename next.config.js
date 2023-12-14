/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "https://firebasestorage.googleapis.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
