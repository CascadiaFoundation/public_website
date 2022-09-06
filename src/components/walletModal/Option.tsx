import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import Typography from '@/components/typography';

export default function Option({
  link = null,
  onClick = null,
  header,
  subheader = null,
  icon,
  clickable = true,
}: {
  id: string;
  link?: string | null;
  size?: number | null;
  onClick?: null | (() => void);
  header: React.ReactNode;
  subheader: React.ReactNode | null;
  icon: string;
  active?: boolean;
  clickable?: boolean;
}) {
  const content = (
    <div
      role='button'
      // @ts-ignore TYPE NEEDS FIXING
      onClick={onClick}
      className={clsx(
        clickable ? 'cursor-pointer' : '',
        'flex w-full items-center justify-between gap-4 rounded bg-[rgba(0,0,0,0.2)] px-4 py-3 focus:outline-none'
      )}
    >
      <div className='flex flex-col gap-1'>
        <div id={`wallet-option-${header}`} className='flex items-center'>
          <Typography variant='sm' weight={700}>
            {header}
          </Typography>
        </div>
        {subheader && <Typography variant='xs'>{subheader}</Typography>}
      </div>
      <Image src={icon} alt='Icon' width='32px' height='32px' />
    </div>
  );

  if (link) {
    return <a href={link}>{content}</a>;
  }

  return content;
}
