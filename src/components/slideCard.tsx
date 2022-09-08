import Image from 'next/image';
import React from 'react';

const SlideCard = (): JSX.Element => {
  return (
    <div className='m-2 w-[270px] p-1 hover:shadow-slideCardShadow'>
      <div className='relative h-[180px] w-full'>
        <Image
          className='absolute'
          src='/images/card.png'
          alt=''
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='p-4 text-center'>
        ESG News: The Architecture Behind DeFi’s Most Scalable EVM
      </div>
    </div>
  );
};

export default SlideCard;
