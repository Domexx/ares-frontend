module.exports = {
  plugins: {
    'stylelint': {},
    'postcss-custom-media': {
      importFrom: `${__dirname}/src/assets/css/mediaqueries.css`,
    },
    'postcss-preset-env': {
      stage: 2,
      features: {
        'custom-properties': {
          importFrom: `${__dirname}/src/assets/css/variables.css`,
          preserve: false,
        },
        'nesting-rules': true,
      },
    },
    'postcss-pxtorem': {},
    'postcss-reporter': { clearReportedMessages: true },
    autoprefixer: {},
  }
};