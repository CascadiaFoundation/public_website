import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '@/layout';

const Faucet = (): JSX.Element => {
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [checkedAddress, setCheckedAddress] = useState<boolean>(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.includes('0x') && value.length === 42) setCheckedAddress(true);
    else setCheckedAddress(false);
  };
  return (
    <Layout>
      <div className='m-auto md:px-10 md:py-6 lg:px-32 lg:py-14'>
        <div className='bg-white p-4 shadow-md shadow-primary-500/20 sm:px-6 sm:py-5 md:px-8 md:py-7'>
          <div className='grid grid-rows-4 place-items-center gap-y-2 text-center sm:gap-y-4 md:gap-y-8'>
            <div className='flex w-full items-center justify-between'>
              <h2 className='text-xl font-bold text-primary-900 md:text-2xl'>
                Faucet
              </h2>
              <button className='flex items-center bg-primary-900 px-3 py-2 text-secondary-100 transition-all hover:bg-primary-900/60'>
                <FontAwesomeIcon icon={faWallet} className='mr-3 text-xl' />
                <span>Connect Wallet</span>
              </button>
            </div>
            <div className='w-full max-w-[900px] font-normal text-primary-900'>
              This faucet is a community project where you can currently request
              up to 20Ⓝ testnet Cascadia every hour. It is run on donations so
              if you have any unused tokens please consider sharing them with
              our fellow testnetters.
            </div>
            <div className='relative h-10 w-full max-w-[600px] border border-primary-900'>
              <input
                className='h-full w-full p-2 placeholder:text-primary-500 focus:outline-none'
                placeholder='Hexadecimal Address (0x...)'
                onChange={handleChangeInput}
                maxLength={42}
              />
              <FontAwesomeIcon
                icon={faCheck}
                className={clsx(
                  'absolute inset-y-0 right-2 m-auto text-xl',
                  checkedAddress ? 'text-primary-900' : 'text-gray-300'
                )}
              />
            </div>
            <div className='text-primary-500'>
              Once you are done with the testing, feel free to send the
              remaining coins to the following faucet address.
            </div>
            <div className='flex items-center justify-center'>
              <div className='w-full break-all text-primary-500'>
                0x2352D20fC81225c8ECD8f6FaA1B37F24FEd450c9
              </div>
              <CopyToClipboard
                text='0x2352D20fC81225c8ECD8f6FaA1B37F24FEd450c9'
                onCopy={() => setCopiedText(true)}
              >
                <FontAwesomeIcon
                  icon={faCopy}
                  className='mx-3 text-base text-primary-500'
                />
              </CopyToClipboard>

              {copiedText ? <span>Copied.</span> : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faucet;
