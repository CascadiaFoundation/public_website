import React from 'react';

import Btn from '@/components/btn';

const SubHeader = (): JSX.Element => {
  return (
    <div className='flex max-h-screen w-full items-center justify-start bg-header-background bg-cover bg-center px-7 pt-40 pb-20 md:px-20 lg:px-32'>
      <div className='w-full max-w-[500px] text-center md:text-left'>
        <div className='pb-7 text-4xl text-white'>
          A Better Future requires a Better Foundation
        </div>
        <div className='pb-9 text-base text-white-100'>
          Decentralized Oracle Network provide tamper-proof inputs, outputs, and
          computations to support advanced smart contracs on any blockchain.
        </div>
        <div className='flex flex-col items-center justify-start md:flex-row'>
          <Btn
            className='mb-4 w-[200px] border-white bg-white text-black-900 md:mr-4'
            label='Develop with Cascadia'
          />
          <Btn
            className='mb-4 w-[200px] border-white bg-transparent text-white'
            label='Explore solutions'
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
