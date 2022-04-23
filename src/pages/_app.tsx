import React from 'react';
import { DefaultSeo } from 'next-seo';
import { SkeletonTheme } from 'react-loading-skeleton';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AnimateSharedLayout } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import SEO from '../../next-seo.config';

import '../assets/css/main.css';
import 'react-loading-skeleton/dist/skeleton.css';

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Toaster position="bottom-right" />
      <AnimateSharedLayout>
        <SkeletonTheme baseColor="#757373" highlightColor="#444">
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </SkeletonTheme>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
