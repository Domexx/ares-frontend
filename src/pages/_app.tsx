import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import '../assets/css/main.css';

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
