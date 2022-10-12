import React, { useCallback, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import Btn from '@/components/btn';
import toast from '@/components/toast';

import Layout from '@/layout';
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
    <Layout>
      <div className='m-auto p-4 md:px-10 md:py-6 lg:px-32 lg:py-14'>
        <div className='bg-white p-6 px-6 shadow-md shadow-primary-500/20 sm:py-4 md:px-8 md:py-6'>
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='flex w-full flex-col items-center justify-between md:flex-row'>
              <h2 className='mt-5 w-full text-center text-2xl font-semibold text-primary-900 md:mt-0 md:text-left'>
                Cascadia Faucet
              </h2>
            </div>
            <div className='mt-8 w-full max-w-[990px] font-normal text-primary-900'>
              {`Our Cascadia faucet distributes tasks and rewards in tiny, micro-sized bits to encourage our community to visit this more frequently. You can currently request up to 10 test coin for Cascadia through our faucet program once every hour. It is supported by donations, so if you have any extra tokens, please think about giving them to yet another fellow "testnetter".`}
            </div>
            <div className='relative mt-8 flex h-10 w-full max-w-[600px] items-center border border-primary-900 bg-background'>
              <input
                className='h-full w-full overflow-hidden text-ellipsis bg-background p-2 text-base font-normal placeholder:text-primary-500 focus:outline-none'
                placeholder='Hexadecimal Address (0x...)'
                onChange={handleChangeInput}
                maxLength={42}
                value={inputAddress}
              />
              <Btn
                label='Send request'
                onClick={handleSubmit}
                className='flex-none border-0 bg-primary-900 text-secondary-200 transition-all hover:bg-primary-500'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faucet;
