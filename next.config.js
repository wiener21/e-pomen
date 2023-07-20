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
        protocol: 'http',
        hostname: '127.0.0.1',
      },
    ],
    formats: [],
  },
}

module.exports = nextConfig
