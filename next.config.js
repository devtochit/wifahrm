/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'placeimg.com',
      'https://i.ibb.co'
    ], //your-external-link-hostname
  },

}

module.exports = nextConfig
