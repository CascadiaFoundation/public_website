import clsx from 'clsx';
import React, { FC } from 'react';

import Typography from '@/components/typography';

export interface ModalActionErrorProps {
  className?: string;
  children: React.ReactNode;
}

const ModalError: FC<ModalActionErrorProps> = ({
  className = '',
  children,
}) => {
  if (!children) return <></>;

  return (
    <Typography
      variant='xs'
      weight={700}
      className={clsx('text-red text-center', className)}
    >
      {children}
    </Typography>
  );
};

export default ModalError;
