import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props: any) => {
  return (
    <div className='flex flex-col min-h-screen h-full'>
      <div className='flex-1'>
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;