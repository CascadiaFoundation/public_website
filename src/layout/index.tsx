import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

import Footer from '@/layout/footer';
import Header from '@/layout/header';

// import SubHeader from '@/layout/subHeader';
import UpIcon from '../../public/images/arrow-up.svg';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className='bg-background'>
      <Header />
      {/* <SubHeader /> */}
      {children}
      <Footer />
      <ScrollToTop
        smooth
        component={
          <div className='p-3'>
            <UpIcon />
          </div>
        }
        width='50px'
      />
    </div>
  );
};

export default Layout;
