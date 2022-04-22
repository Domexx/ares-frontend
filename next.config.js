const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader']
      });

      return config;
  },
  images: {
    domains: [
      'cdn.discordapp.com',
      'discordapp.com',
      'habbo.com'
    ]
  }
}

module.exports = nextTranslate(nextConfig);