import { ChevronDownIcon } from '@heroicons/react/24/outline';
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

  const borderBottom = collapsed ? 'border-b-0' : 'border-b-[1px]';
  const hidden = collapsed ? 'h-full opacity-100' : 'h-0 opacity-0';

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
    setOpen((prev) => !prev);
  }, [onClick]);

  return (
    <div className={className}>
      <div
        className={
          'z-10 flex items-center justify-between border-white-100 p-2 ' +
          borderBottom
        }
        onClick={handleClick}
      >
        <div>{title}</div>
        {collapsable && (
          <div>
            {collapsed ? (
              <ChevronDownIcon className='h-4 w-4 rotate-180 transition-all' />
            ) : (
              <ChevronDownIcon className='h-4 w-4 transition-all' />
            )}
          </div>
        )}
      </div>

      <div className={'overflow-hidden transition-all ' + hidden}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
