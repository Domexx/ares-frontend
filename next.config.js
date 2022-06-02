const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
  images: {
    domains: ['cdn.discordapp.com', 'discordapp.com', 'habbo.com', 's.gravatar.com', 'imager.habboon.pw'],
    layoutRaw: true
  },
};

module.exports = nextTranslate(nextConfig);
