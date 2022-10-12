import { config } from '@fortawesome/fontawesome-svg-core';
import NextNProgress from 'nextjs-progressbar';
import { Fragment, useEffect, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/fonts.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
config.autoAddCss = false;
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-toastify/dist/ReactToastify.css';

import Dots from '@/components/dots';

// @ts-ignore TYPE NEEDS FIXING
import store, { persistor } from '@/state';

// @ts-ignore TYPE NEEDS FIXING
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  // Allows for conditionally setting a provider to be hoisted per page
  const Provider = Component.Provider || Fragment;

  // Allows for conditionally setting a guard to be hoisted per page
  const Guard = Component.Guard || Fragment;

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <NextNProgress
            color='white'
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          <ReduxProvider store={store}>
            <PersistGate loading={<Dots>Loading</Dots>} persistor={persistor}>
              <RecoilRoot>
                <Provider>
                  <Guard>
                    <Component {...pageProps} />
                  </Guard>
                </Provider>
              </RecoilRoot>
            </PersistGate>
          </ReduxProvider>
          <ToastContainer
            theme='colored'
            position='top-right'
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
            draggable={false}
            closeOnClick={false}
            pauseOnHover
          />
        </>
      ) : (
        <div className='m-auto flex min-h-screen w-full items-center justify-center'>
          <div className='text-5xl font-bold text-main-900'>Cascadia</div>
        </div>
      )}
    </>
  );
}

export default MyApp;
