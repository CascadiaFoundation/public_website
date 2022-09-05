import clsx from 'clsx';
import React from 'react';

type btnProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

const Btn = ({ label, className, onClick }: btnProps): JSX.Element => {
  return (
    <button
      className={clsx(
        'border px-4 py-2 text-base font-normal transition-all',
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Btn;
