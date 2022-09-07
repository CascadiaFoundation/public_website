import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Lottie from 'lottie-react';
import React, { useCallback, useEffect, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import Copy from '@/components/accountDetails/copy';
import toast from '@/components/toast';
import Typography from '@/components/typography';
import Web3Status from '@/components/web3Status';

import loadingCircle from '@/animation/loading-circle.json';
import Layout from '@/layout';
import { useActiveWeb3React } from '@/services/web3';

const Faucet = (): JSX.Element => {
  const { account }: any = useActiveWeb3React();
  const [inputAddress, setInputAddress] = useState<string>('');
  const [checkedAddress, setCheckedAddress] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

    setLoading(true);

    fetch(`/api/getFaucet/${inputAddress}`)
      .then((res) => res.json())
      .then((res) => {
        notify('dark', res.message);
        setLoading(false);
      })
      .catch(() => {
        notify('dark', 'Network Error');
        setLoading(false);
      });
  }, [checkedAddress, inputAddress, notify]);

  useEffect(() => {
    if (account) {
      setInputAddress(account);
      setCheckedAddress(true);
    }
  }, [account]);

  return (
    <Layout>
      <div className='m-auto p-4 md:px-10 md:py-6 lg:px-32 lg:py-14'>
        <div className='bg-white p-6 px-6 shadow-md shadow-primary-500/20 sm:py-4 md:px-8 md:py-6'>
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='flex w-full flex-col items-center justify-between md:flex-row'>
              <h2 className='mt-5 w-full text-center text-2xl font-semibold text-primary-900 md:mt-0 md:text-left'>
                Cascadia Faucet
              </h2>
              <div className='mt-5 mr-5 flex w-full items-center justify-end md:mt-0 md:mr-0'>
                {/* {library && library.provider.isMetaMask && (
                  <div className="hidden sm:inline-block">
                    <Web3Network />
                  </div>
                )} */}
                <Web3Status />
              </div>
            </div>
            <div className='mt-8 w-full max-w-[990px] font-normal text-primary-900'>
              {`Our Cascadia faucet distributes tasks and rewards in tiny, micro-sized bits to encourage our community to visit this more frequently. You can currently request up to 10 test coin for Cascadia through our faucet program once every hour. It is supported by donations, so if you have any extra tokens, please think about giving them to yet another fellow "testnetter".`}
            </div>
            <div className='relative mt-8 h-10 w-full max-w-[600px] border border-primary-900'>
              <input
                className='h-full w-full bg-background p-2 text-base font-normal placeholder:text-primary-500 focus:outline-none'
                placeholder='Hexadecimal Address (0x...)'
                onChange={handleChangeInput}
                maxLength={42}
                value={inputAddress}
              />
              {loading ? (
                <div className='absolute inset-y-0 right-0 m-auto h-10 w-10 cursor-pointer'>
                  <Lottie animationData={loadingCircle} autoplay loop />
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={handleSubmit}
                  className={clsx(
                    'absolute inset-y-0 right-2 m-auto text-xl',
                    checkedAddress
                      ? 'cursor-pointer text-primary-900'
                      : 'text-primary-500/50'
                  )}
                />
              )}
            </div>
            <div className='mt-8 text-sm text-primary-500'>
              Feel free to send the residual coins to the following faucet
              address once you have finished testing.
            </div>
            {account && (
              <div className='my-8 flex items-center justify-center bg-background px-3 py-2'>
                <Typography
                  variant='sm'
                  className='w-full break-all text-primary-500'
                >
                  {account}
                </Typography>
                <Copy toCopy={account} className='ml-4 text-primary-500'></Copy>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faucet;
