import { useRouter } from 'next/router';
import React from 'react';

import Btn from '@/components/btn';

const SubHeader = (): JSX.Element => {
  const { pathname } = useRouter();
  let background = 'bg-home-background';
  let textColor = '';

  switch (pathname) {
    case '/':
      background = 'bg-home-background';
      textColor = '';
      break;
    case '/learning':
      background = 'bg-learning-background';
      textColor = 'text-maini-900';
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center md:justify-start ${background} bg-cover bg-center px-7 pt-40 pb-20 md:px-20 lg:px-32`}
    >
      <div className='w-full max-w-[500px] text-center md:text-left'>
        <div className='pb-7 text-3xl font-bold text-white md:text-4xl'>
          A <span className={textColor}>Better Future</span> requires a{' '}
          <span className={textColor}>Better Foundation</span>
        </div>
        <div className='pb-9 text-base text-white-100'>
          Decentralized Oracle Network provide tamper-proof inputs, outputs, and
          computations to support advanced smart contracs on any blockchain.
        </div>
        <div className='flex flex-col items-center justify-start md:flex-row'>
          <Btn
            className='mb-4 w-full border-white bg-white text-black-900 md:mr-4 md:w-[200px]'
            label='Develop with Cascadia'
          />
          <Btn
            className='mb-4 w-full border-white bg-transparent text-white md:w-[200px]'
            label='Explore solutions'
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
