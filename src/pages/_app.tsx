import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import '@/styles/globals.css';
import '@/styles/colors.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color='white'
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
