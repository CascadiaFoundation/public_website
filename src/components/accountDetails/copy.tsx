import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { FC } from 'react';

import useCopyClipboard from '@/hooks/useCopyClipboard';

interface CopyHelperProps {
  className?: string;
  toCopy: string;
  children?: React.ReactNode;
}

const CopyHelper: FC<CopyHelperProps> = ({ className, toCopy, children }) => {
  const [isCopied, setCopied] = useCopyClipboard();

  return (
    <div className={clsx(className)} onClick={() => setCopied(toCopy)}>
      {isCopied && (
        <div className='flex cursor-pointer items-center gap-1'>
          {children}
          <FontAwesomeIcon icon={faCheck} className='text-base' />
        </div>
      )}

      {!isCopied && (
        <div className='flex cursor-pointer items-center gap-1'>
          {children}
          <FontAwesomeIcon icon={faCopy} className='text-base' />
        </div>
      )}
    </div>
  );
};

export default CopyHelper;
