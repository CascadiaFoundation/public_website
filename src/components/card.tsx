import { faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import Btn from './btn';

type itemProps = {
  className?: string;
  title: string;
  content: string;
  button: string;
};

const Card = ({
  className,
  title,
  content,
  button,
}: itemProps): JSX.Element => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <div className='flex items-center gap-4'>
        <div className='rounded-full bg-main-900 p-2'>
          <FontAwesomeIcon icon={faImages} className='h-6 w-6 text-white' />
        </div>
        <div className='home-title-base'>{title}</div>
      </div>
      <div className='home-content-base flex-1 py-4'>{content}</div>
      <Btn
        label={button}
        className='w-full border-primary-900 bg-transparent text-primary-900 hover:bg-primary-900/10'
      />
    </div>
  );
};

export default Card;
