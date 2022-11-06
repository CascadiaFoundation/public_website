import { useRouter } from 'next/router';
import React from 'react';

import Btn from '@/components/btn';

const EcoSubHeader = (): JSX.Element => {
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
    case '/ecosystem':
      title =
        'A Foundation for Developers<br/>A Decentralized Network for Everyone';
      content =
        'Cascadia is revolutionizing the crypto world of financial transactions. Embracing decentralized finance solutions by introducing EVM compatibility and enabling Ethereum Dapp developers to effortlessly port their projects away.';
      break;
    case '/esg':
      title = 'Cascadia Embraces ESG Accountability';
      content =
        "Our contention is that negative ESG externalities are a result of the Tragedy of the Commons.  We'll work with stakeholders to understand the opportunities and risks connected to environmental, social, and governance criteria.";
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
    <div className='flex h-full w-full items-center bg-eco-background bg-cover bg-center px-10 pt-20 sm:pb-20 md:justify-start md:px-20 lg:h-[480px] lg:px-32'>
      <div className='flex items-center lg:justify-start'>
        <div className='py-15 flex h-full w-full flex-col items-baseline justify-center px-2 px-0 lg:w-3/4 lg:w-full lg:py-0 lg:text-left'>
          <div className='w-full pb-12 text-3xl font-bold text-primary-900 md:text-4xl lg:max-w-[800px] lg:text-left'>
            <div dangerouslySetInnerHTML={{ __html: title }}></div>
          </div>
          <div className='w-full pb-12 text-base leading-8 text-primary-500 lg:max-w-[600px]'>
            {content}
          </div>
          <div className='flex w-full flex-col items-center sm:flex-row lg:justify-start'>
            {/* <Btn
              className='mb-4 w-full border-white bg-white text-primary-900 transition-all hover:border-white/40 hover:bg-white/40 sm:mr-4 sm:w-[200px] md:mb-0 md:w-fit'
              label='Develop with Cascadia'
            /> */}
            <Btn
              className='mb-4 w-full border-primary-900 bg-transparent text-primary-900 hover:bg-primary-900 hover:text-white sm:w-[200px] md:mb-0 md:w-fit'
              label='Explore solutions'
              onClick={() => router.push('/esg')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoSubHeader;
