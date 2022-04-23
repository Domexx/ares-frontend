import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { currentLocale } from '../../../shared/lib/common';

export default handleAuth({
  async login(req, res) {
    const locale = currentLocale(req);

    try {
      await handleLogin(req, res, {
        authorizationParams: {
          scope: 'openid profile email offline_access',
          audience: process.env.AUTH0_AUDIENCE,
        },
        returnTo: `/${locale}/dashboard`,
      });
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      res.status(error.status || 400).end(error.message);
    }
  },
});
