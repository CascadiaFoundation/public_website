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
        return <div className=''>{child}</div>;
      })}
    </div>
  );
};

export default Accordion;
