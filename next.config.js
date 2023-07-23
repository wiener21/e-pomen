/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    domains: ["127.0.0.1", "admin.e-pomen.rs", "e-pomen.rs"]
  },
}

module.exports = nextConfig
