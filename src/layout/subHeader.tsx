import { useRouter } from 'next/router';
import React from 'react';

import Btn from '@/components/btn';

const SubHeader = (): JSX.Element => {
  const { pathname } = useRouter();
  let background = 'bg-home-background';
  let textColor = 'text-white';
  let defaultColor = 'text-white';
  let contentColor = 'text-secondary-100';

  let leftBtnTextColor = 'text-primary-900';
  let leftBtnBorderColor = 'border-white';
  let leftBtnBGColor = 'bg-white';

  let rightBtnTextColor = 'text-white';
  let rightBtnBorderColor = 'border-white';
  let rightBtnBGColor = 'bg-transparent';

  switch (pathname) {
    case '/':
      background = 'bg-home-background';
      break;
    case '/learning':
      background = 'bg-learning-background';
      textColor = 'text-main-900';
      defaultColor = 'text-primary-900';
      contentColor = 'text-primary-900';

      leftBtnTextColor = 'text-secondary-200';
      leftBtnBorderColor = 'border-main-900';
      leftBtnBGColor = 'bg-main-900';

      rightBtnTextColor = 'text-main-900';
      rightBtnBorderColor = 'border-main-900';
      rightBtnBGColor = 'bg-transparent';
      break;
    case '/faucet':
      background = 'bg-learning-background';
      textColor = 'text-main-900';
      defaultColor = 'text-primary-900';
      contentColor = 'text-primary-900';

      leftBtnTextColor = 'text-secondary-200';
      leftBtnBorderColor = 'border-main-900';
      leftBtnBGColor = 'bg-main-900';

      rightBtnTextColor = 'text-main-900';
      rightBtnBorderColor = 'border-main-900';
      rightBtnBGColor = 'bg-transparent';
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center md:justify-start ${background} bg-cover bg-center px-7 pt-40 pb-20 md:px-20 lg:px-32`}
    >
      <div className='w-full max-w-[500px] text-center md:text-left'>
        <div className='pb-7 text-3xl font-bold md:text-4xl'>
          <span className={defaultColor}>A </span>
          <span className={textColor}>Better Future</span>
          <span className={defaultColor}> requires a </span>
          <span className={textColor}>Better Foundation</span>
        </div>
        <div className={`pb-9 text-base ${contentColor}`}>
          Decentralized Oracle Network provide tamper-proof inputs, outputs, and
          computations to support advanced smart contracs on any blockchain.
        </div>
        <div className='flex flex-col items-center justify-start md:flex-row'>
          <Btn
            className={`mb-4 w-full md:mr-4 md:w-[200px] ${leftBtnTextColor} ${leftBtnBorderColor} ${leftBtnBGColor}`}
            label='Develop with Cascadia'
          />
          <Btn
            className={`mb-4 w-full md:w-[200px] ${rightBtnTextColor} ${rightBtnBorderColor} ${rightBtnBGColor}`}
            label='Explore solutions'
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
