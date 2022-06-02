const nextTranslate = require('next-translate');
const path = require('path');
const loaderUtils = require('loader-utils');

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          }#className:${exportName}`,
      ),
      'sha1',
      'hex',
      10,
    )
    .replace(/^(-?\d|--)/, '_$1');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

  const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader')
          )
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
        });
      });

    return config;
  },
  images: {
    domains: ['cdn.discordapp.com', 'discordapp.com', 'habbo.com', 's.gravatar.com', 'imager.habboon.pw', 'habbo.city'],
    layoutRaw: true
  },
};

module.exports = nextTranslate(nextConfig);
