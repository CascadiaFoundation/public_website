import clsx from 'clsx';
import React, { FC } from 'react';

export interface ModalBodyProps {
  className?: string;
  children?: React.ReactNode;
}

const ModalBody: FC<ModalBodyProps> = ({ className = '', children }) => {
  return (
    <div
      className={clsx(
        'lg:min-w-lg flex h-full flex-col gap-4 lg:max-w-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ModalBody;
