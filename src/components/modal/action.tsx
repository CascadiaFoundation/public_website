import React, { FC } from 'react';

import Button, { ButtonProps } from '@/components/button';

export interface ModalActionProps extends ButtonProps {
  main?: boolean;
}

const ModalAction: FC<ModalActionProps> = ({
  children,
  disabled,
  main = false,
  ...props
}) => {
  return (
    <Button
      {...props}
      size='sm'
      color='blue'
      disabled={disabled}
      variant={main ? 'filled' : 'empty'}
    >
      {children}
    </Button>
  );
};

export default ModalAction;
