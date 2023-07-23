/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.PROTO,
        hostname: process.env.HOST_URL,
      },
    ],
    formats: [],
  },
}

module.exports = nextConfig
