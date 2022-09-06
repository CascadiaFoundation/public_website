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
        notify(res.success, res.message);
        setLoading(false);
      })
      .catch(() => {
        notify('error', 'Error');
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
      <div className='m-auto md:px-10 md:py-6 lg:px-32 lg:py-14'>
        <div className='bg-white p-4 shadow-md shadow-primary-500/20 sm:px-6 sm:py-5 md:px-8 md:py-7'>
          <div className='grid grid-rows-4 place-items-center gap-y-2 text-center sm:gap-y-4 md:gap-y-8'>
            <div className='flex w-full items-center justify-between'>
              <h2 className='text-xl font-bold text-primary-900 md:text-2xl'>
                Faucet
              </h2>
              <div className='flex items-center justify-end'>
                {/* {library && library.provider.isMetaMask && (
                  <div className="hidden sm:inline-block">
                    <Web3Network />
                  </div>
                )} */}
                <Web3Status />
              </div>
            </div>
            <div className='w-full max-w-[900px] font-normal text-primary-900'>
              This faucet is a community project where you can currently request
              up to 20Ⓝ testnet Cascadia every hour. It is run on donations so
              if you have any unused tokens please consider sharing them with
              our fellow testnetters.
            </div>
            <div className='relative mt-4 h-10 w-full max-w-[600px] border border-primary-900'>
              <input
                className='t- h-full w-full bg-background p-2 placeholder:text-primary-500/60 focus:outline-none'
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
            <div className='text-sm text-primary-500'>
              Once you are done with the testing, feel free to send the
              remaining coins to the following faucet address.
            </div>
            {account && (
              <div className='flex items-center justify-center'>
                <Typography variant='sm' className='w-full text-primary-500'>
                  {account}
                </Typography>
                <Copy toCopy={account} className='ml-2 text-primary-500'></Copy>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faucet;
