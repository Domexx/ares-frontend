module.exports = {
  localeDetection: process.env.NEXT_PUBLIC_DETECT_LOCALE,
  locales: ['de'],
  defaultLocale: 'de',
  pages: {
    '*': ['common'],
    '/': ['dashboard']
  },
};