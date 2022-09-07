import { useRouter } from 'next/router';
import React from 'react';

import Btn from '@/components/btn';

const SubHeader = (): JSX.Element => {
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
        'A Foundation for Developers, A Decentralized Network for Everyone';
      content =
        'Decent ralized Oracle Network provide tamper-proof inputs, outputs, and computations to support advanced smart contracs on any blockchain.';
      break;
    case '/esg':
      title = 'Cascadia adheres the ESG model';
      content =
        'The ideal way to define ESG is as a framework for stakeholders to understand how an organization is handling opportunities and risks connected to environmental, social, and governance criteria.';
      break;
    case '/faucet':
      title = 'Faucet “Activated”';
      content =
        'Decentralized Oracle Network provide tamper-proof inputs, outputs, and computations to support advanced smart contracs on any blockchain.';
      break;
    default:
      break;
  }

  return (
    <div className='flex h-full w-full items-center justify-center bg-home-background bg-cover bg-center px-7 pt-36 pb-10 sm:pb-20 md:justify-start md:px-20 lg:h-[480px] lg:px-32'>
      <div className='flex h-full w-full flex-col items-baseline justify-center px-2 text-center sm:px-5 md:text-left lg:max-w-[650px] lg:px-0'>
        <div className='w-full pb-7 text-center text-3xl font-bold text-white md:text-left md:text-4xl'>
          {title}
        </div>
        <div className='w-full flex-grow pb-10 text-base text-secondary-100 lg:max-w-[600px] lg:pb-2'>
          {content}
        </div>
        <div className='flex w-full flex-col items-center justify-center sm:flex-row md:justify-start'>
          <Btn
            className='mb-4 w-full border-white bg-white text-primary-900 transition-all hover:border-white/40 hover:bg-white/40 sm:mr-4 sm:w-[200px] md:mb-0 md:w-fit'
            label='Develop with Cascadia'
          />
          <Btn
            className='mb-4 w-full border-white bg-transparent text-white hover:border-white/40 hover:bg-white/40 sm:w-[200px] md:mb-0 md:w-fit'
            label='Explore solutions'
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
