/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'de', 'nl', 'br'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader']
      });

      return config;
  }
}

module.exports = nextConfig