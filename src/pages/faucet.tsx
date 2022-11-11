import Footer from '@/layout/footer';
import Header from '@/layout/header';
import Link from 'next/link';

import React, { useCallback, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Btn from '@/components/btn';
import toast from '@/components/toast';
const Faucet = (): JSX.Element => {


  const [inputAddress, setInputAddress] = useState<string>('');
  const [checkedAddress, setCheckedAddress] = useState<boolean>(false);

  const notify = React.useCallback((type: string, message: string) => {
    toast({ type, message });
  }, []);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.includes('0x') && value.length === 42) setCheckedAddress(true);
    else setCheckedAddress(false);

    setInputAddress(value);
  };

  const handleSubmit = useCallback(() => {
    if (!checkedAddress) return;

    fetch(`/api/getFaucet/${inputAddress}`)
      .then((res) => res.json())
      .then((res) => {
        notify('dark', res.message);
      })
      .catch(() => {
        notify('dark', 'Network Error');
      });
  }, [checkedAddress, inputAddress, notify]);



  return (
    <div className='bg-faucet-background bg-cover'>
      <Header />
      {/* <video
        loop
        autoPlay
        muted
        className='absolute left-0 right-0 top-0 bottom-0 -z-10 h-screen w-screen object-cover'
      >
        <source src='home.mp4' type='video/mp4' />
      </video> */}
      {/* 
      <div className='text-4xl text-primary-500 font-light h-screen flex items-center justify-left px-8 md:px-20 lg:px-32'>
        <div>
          <span>The</span>
          <span className='font-bold'> World's First Neocybernetic </span>
          <span>Blockchain</span>
        </div>
      </div>
      */}
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
          <div className='pb-14 text-4xl font-bold text-primary-900'>
            Faucet
          </div>
          <div className='flex justify-center pb-14 font-normal text-primary-500'>
            <span className='w-4/5 leading-7 md:w-3/5 xl:w-full'>
              You can request Cascadia testnet tokens once every 24 hours. The
              faucet is supported by donations.
            </span>
          </div>
          <div className='block xl:hidden'>
            <div className='pb-14'>
              <input
                className='h-full w-4/5 overflow-hidden text-ellipsis border border-primary-500 bg-primary-500/10 p-2 text-base font-normal placeholder:text-center placeholder:text-primary-500 focus:outline-none md:w-3/5 xl:w-1/3'
                placeholder='Hexadecimal Address (0x...)'
                onChange={handleChangeInput}
                maxLength={42}
                value={inputAddress}
              />
            </div>
            <Btn
              label='Claim'
              onClick={handleSubmit}
              className='w-4/5 flex-none border-0 border bg-primary-500 px-3 py-2 text-base font-normal text-background transition-all transition-all md:w-3/5 xl:w-1/3'
            />

            {/* <button
              className='w-4/5 flex-none border-0 border bg-primary-500 px-3 py-2 text-base font-normal text-background transition-all transition-all md:w-3/5 xl:w-1/3'
              disabled
            >
              Claim
            </button> */}
          </div>

          <div className='hidden xl:block'>
            <div className='flex justify-between px-10'>
              <input
                className='h-full w-9/12 overflow-hidden text-ellipsis border border-primary-500 bg-primary-500/10 p-2 text-base font-normal placeholder:text-center placeholder:text-primary-500 focus:outline-none'
                placeholder='Hexadecimal Address (0x...)'
                onChange={handleChangeInput}
                maxLength={42}
                value={inputAddress}
              />
              <Btn
                label='Claim'
                onClick={handleSubmit}
                className='w-4/5 flex-none border-0 border bg-primary-500 px-3 py-2 text-base font-normal text-background transition-all transition-all md:w-3/5 xl:w-1/4'
              />
              {/* <button
                className='w-3/12 flex-none border-0 border bg-primary-500 px-3 py-2 text-base font-normal text-background transition-all transition-all'
                disabled
              >
                Claim
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <div className='text-normal absolute bottom-0 left-0 flex items-center px-8 py-7 text-primary-500 md:px-10 lg:px-32'>
        <div className='mr-6'>
          <Link href='/privacy'>Privacy Policy</Link>
        </div>
        <div>
          <Link href='/terms'>Terms of Use</Link>
        </div>
      </div> */}
    </div>
  );
  // return (
  //   <Layout>
  //     <div className='m-auto p-4 md:px-10 md:py-6 lg:px-32 lg:py-14'>
  //       <div className='bg-white p-6 px-6 shadow-md shadow-primary-500/20 sm:py-4 md:px-8 md:py-6'>
  //         <div className='flex flex-col items-center justify-center text-center'>
  //           <div className='flex w-full flex-col items-center justify-between md:flex-row'>
  //             <h2 className='mt-5 w-full text-center text-2xl font-semibold text-primary-900 md:mt-0 md:text-left'>
  //               Cascadia Faucet
  //             </h2>
  //           </div>
  //           <div className='mt-8 w-full max-w-[990px] font-normal text-primary-900'>
  //             {`Our Cascadia faucet distributes tasks and rewards in tiny, micro-sized bits to encourage our community to visit this more frequently. You can currently request up to 10 test coin for Cascadia through our faucet program once every hour. It is supported by donations, so if you have any extra tokens, please think about giving them to yet another fellow "testnetter".`}
  //           </div>
  //           <div className='relative mt-8 flex h-10 w-full max-w-[600px] items-center border border-primary-900 bg-background'>
  //             <input
  //               className='h-full w-full overflow-hidden text-ellipsis bg-background p-2 text-base font-normal placeholder:text-primary-500 focus:outline-none'
  //               placeholder='Hexadecimal Address (0x...)'
  //               onChange={handleChangeInput}
  //               maxLength={42}
  //               value={inputAddress}
  //             />
  //             <Btn
  //               label='Send request'
  //               onClick={handleSubmit}
  //               className='flex-none border-0 bg-primary-900 text-secondary-200 transition-all hover:bg-primary-500'
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Layout>
  // );
};

export default Faucet;
