/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.e-pomen.rs',
      },
    ],
    formats: [],
  },
}

module.exports = nextConfig
