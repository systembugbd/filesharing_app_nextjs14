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

if (!process.env.RESEND_API_KEY) return throwError("RESEND_API_KEY");
