import React, { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  tooltipText: string;
}

const Tooltip = ({ children, tooltipText }: Props): JSX.Element => {
  const tipRef: any = useRef<HTMLDivElement>();

  const handleMouseEnter = () => {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginTop = '20px';
  };
  const handleMouseLeave = () => {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginTop = '10px';
  };
  return (
    <div
      className='relative flex items-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='whitespace-no-wrap absolute flex items-center rounded bg-gradient-to-b from-black to-gray-700 px-4 py-2 text-white transition-all duration-150'
        style={{ top: '100%', left: '-20px', opacity: 0 }}
        ref={tipRef}
      >
        <div
          className='absolute h-3 w-3 bg-black'
          style={{ top: '-6px', left: '28px', transform: 'rotate(45deg)' }}
        />
        {tooltipText}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
