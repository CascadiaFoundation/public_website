import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';

interface Props {
  title: ReactNode | string;
  children: ReactNode;
  className?: string;
  collapse: boolean;
  collapsable?: boolean;
  onClick?: () => void;
}

const AccordionItem = ({
  title,
  children,
  className = '',
  collapse,
  onClick,
  collapsable = true,
}: Props) => {
  const [open, setOpen] = useState(false);

  const collapsed = useMemo(() => {
    return collapsable && collapse === undefined ? open : collapse;
  }, [collapse, open, collapsable]);

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
    setOpen((prev) => !prev);
  }, [onClick]);

  return (
    <div className={clsx('flex flex-col', className)}>
      <button
        className='my-2 flex h-[60px] flex-shrink flex-grow basis-0 cursor-pointer items-center border-secondary-200 bg-transparent'
        onClick={handleClick}
      >
        <div className='flex-shrink flex-grow basis-0'>
          <h3 className='cursor-pointer text-left text-base text-white'>
            {title}
          </h3>
        </div>
        {collapsable && (
          <div>
            {collapsed ? (
              <ChevronDownIcon className='h-4 w-4 rotate-180 transition-all' />
            ) : (
              <ChevronDownIcon className='h-4 w-4 transition-all' />
            )}
          </div>
        )}
      </button>
      <div
        className={clsx(
          'before:border-t-borderCard overflow-hidden transition-all duration-500 before:block before:border-t before:content-[""] ',
          collapsed ? 'max-h-[2000px]' : 'max-h-0'
        )}
      >
        <div className='flex flex-shrink items-center justify-start p-1'>
          <div className='text-secondary-100/80'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
