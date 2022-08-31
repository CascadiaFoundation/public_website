import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Accordion = ({ children, className = '' }: Props) => {
  const combinedClassName = 'overflow-hidden ' + className;
  return (
    <div className={combinedClassName}>
      {React.Children.map(children, (child) => {
        // const borderTop = index === 0 ? 'border-t-0' : 'border-t'
        return <div className='child border-secondary-100'>{child}</div>;
      })}
    </div>
  );
};

export default Accordion;
