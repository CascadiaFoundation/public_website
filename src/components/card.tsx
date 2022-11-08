import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type itemProps = {
  className?: string;
  title: string;
  content: string;
  iconUrl: string;
  // button: string;
};

const Card = ({
  className,
  title,
  content,
  iconUrl,
}: // button,
itemProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex flex-col bg-white p-6 shadow-cardShadow md:p-4 lg:p-2 lg:shadow-none',
        className
      )}
    >
      <div className='flex items-center gap-4'>
        <div className='flex cursor-pointer'>
          {/* <FontAwesomeIcon icon={faImages} className='h-6 w-6 text-white' /> */}
          <Image
            src={iconUrl}
            alt='innovation icons'
            // layout='fill'
            width='36'
            height='36'
          />
        </div>
        <div className='text-2xl font-bold text-primary-900'>{title}</div>
      </div>
      <div className='home-content-base flex-1 py-4 leading-7 text-primary-500'>
        {content}
      </div>
      {/* <Btn
        label={button}
        className='w-full border-primary-900 bg-transparent text-base text-primary-900 hover:bg-primary-900/10 lg:w-fit'
      /> */}
    </div>
  );
};

export default Card;
