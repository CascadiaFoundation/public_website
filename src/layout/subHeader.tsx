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
      break;
    case '/esg':
      title = 'Cascadia is the ESG Blockchain';
      content =
        'The acronym ESG stands for Environmental, Social and Governance. It’s a criterion which is popular in the world of business and investing. ESG is used to identify risks that may be missed through traditional forms of analysis.';
      break;
    default:
      break;
  }

  return (
    <div className='flex h-full w-full items-center justify-center bg-home-background bg-cover bg-center px-7 pt-40 pb-20 md:justify-start md:px-20 lg:px-32'>
      <div className='w-full max-w-[500px] text-center md:text-left'>
        <div className='pb-7 text-3xl font-bold text-white md:text-4xl'>
          {title}
        </div>
        <div className='pb-9 text-base text-secondary-100'>{content}</div>
        <div className='flex flex-col items-center justify-start md:flex-row'>
          <Btn
            className='mb-4 w-full border-white bg-white text-primary-900 transition-all hover:border-white/40 hover:bg-white/40 md:mr-4 md:w-[200px]'
            label='Develop with Cascadia'
          />
          <Btn
            className='mb-4 w-full border-white bg-transparent text-white hover:border-white/40 hover:bg-white/40 md:w-[200px]'
            label='Explore solutions'
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
