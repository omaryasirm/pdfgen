/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'puppeteer-core',
      // '@sparticuz/chromium',
      '@sparticuz/chromium-min',
    ]
  }
}

module.exports = nextConfig
