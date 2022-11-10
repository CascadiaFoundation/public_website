import { useRouter } from 'next/router';
import React from 'react';

import Btn from '@/components/btn';

const ESGSubHeader = (): JSX.Element => {
  const router = useRouter();
  const { pathname } = useRouter();
  let title = 'A Better Future requires a Better Foundation';
  let content =
    'Decentralized Oracle Network provide tamper-proof inputs, outputs, and computations to support advanced smart contracs on any blockchain.';

  switch (pathname) {
    case '/':
      title = 'Cascadia Foundation powers the blockchain future';
      content =
        'What if you had it all? A Layer 1 EVM built for fairness, speed and sustainability. Cascadia Foundation offers a unified solution to cross-chain communication that satisfies the needs of platform developers and application builders.';
      break;
    case '/learn':
      title = 'Introducing Cascadia';
      content = '';
      break;
    case '/ecosystem':
      title =
        'A Foundation for Developers<div style="height: 16px;"></div>A Decentralized Network for Everyone';
      content =
        "Cascadia supports EVM-compatible decentralized finance solutions allowing Ethereum developers to easily port their projects to the industry's most collaborative blockchain.";
      break;
    case '/esg':
      title = 'ESG Accountability';
      content =
        "Our contention is that negative ESG externalities are a result of the Tragedy of the Commons. We'll work with stakeholders to understand the opportunities and risks connected to environmental, social, and governance criteria.";
      break;
    case '/faucet':
      title = 'Faucet “Activated”';
      content =
        'Our faucet is made to be simple and user-friendly. Simply connect wallet, do you "tests", and send any leftover tokens to the address below.';
      break;
    default:
      break;
  }

  return (
    <div className='flex h-full w-full items-center justify-center bg-esg-background bg-cover bg-center px-10 pb-12 pt-20 sm:pb-20 md:justify-start md:px-20 lg:h-[480px] lg:px-32'>
      <div className='flex items-center md:pt-10 lg:justify-start'>
        <div className='py-15 flex h-full w-full flex-col items-baseline px-2 px-0 lg:w-3/4 lg:w-full lg:py-0 lg:text-left'>
          <div className='w-full pb-12 text-3xl font-bold text-primary-900 md:text-4xl lg:text-left'>
            {title}
          </div>
          <div className='w-full pb-12 text-base leading-7 text-primary-500 lg:max-w-[600px]'>
            {content}
          </div>
          <div className='flex w-full flex-col items-center sm:flex-row lg:justify-start'>
            <Btn
              className='mb-0 w-full border-highlight bg-highlight text-white transition-all hover:bg-white hover:text-highlight sm:mr-4 sm:w-[200px] md:w-fit'
              label='Develop with Cascadia'
              onClick={() => router.push('/ecosystem')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESGSubHeader;
