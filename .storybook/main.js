const path = require('path');

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    'storybook-dark-mode',
    'storybook-addon-pseudo-states',
    '@whitespace/storybook-addon-html',
    'storybook-addon-next',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-performance/register',
  ],
  core: {
    builder: 'webpack5',
  },
  babel: async (options) => {
        options.plugins.push('babel-plugin-inline-react-svg');
        return options;
  },
  webpackFinal: (config) => {
  
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [
      path.resolve(__dirname, '../assets'),
      'node_modules',
    ];

    return config;
  },
};