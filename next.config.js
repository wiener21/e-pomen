/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    domains: [process.env.ADMIN_HOST]
  },
}

module.exports = nextConfig
