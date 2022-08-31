import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/colors.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
