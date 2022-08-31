import React from 'react';

import Footer from '@/layout/footer';
import Header from '@/layout/header';
import SubHeader from '@/layout/subHeader';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className='bg-background'>
      <Header />
      <SubHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
