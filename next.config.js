/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'placeimg.com',
      'i.ibb.co',
      'ibb.co'
    ], //your-external-link-hostname
  },

}

module.exports = nextConfig
