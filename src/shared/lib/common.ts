import type { NextApiRequest } from 'next';
import { acceptLanguage } from 'next/dist/server/accept-header';
import { locales, defaultLocale } from 'i18n';

export function currentLocale(req: NextApiRequest): string {
  if (!locales) {
    return '';
  }

  const chosenLocale = locales.find((locale) => {
    return locale === req.cookies.NEXT_LOCALE;
  });
  const detectedLocale = chosenLocale ?? acceptLanguage(req.headers['accept-language'], locales);

  return detectedLocale || defaultLocale;
}
