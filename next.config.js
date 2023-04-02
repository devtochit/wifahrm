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
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  },

}

module.exports = nextConfig
