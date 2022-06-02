module.exports = {
  localeDetection: (process.env.NEXT_PUBLIC_DETECT_LOCALE == 'true'),
  locales: ['de', 'en-US'],
  defaultLocale: 'en-US',
  pages: {
    '*': ['common'],
    '/': ['dashboard']
  },
};