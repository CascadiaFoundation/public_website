import Link from 'next/link';
import React from 'react';

export type btnProps = {
  name: string;
  href: string;
  current: boolean;
  onClick?: () => void;
};

const NavBtn = ({ name, href, current, onClick }: btnProps): JSX.Element => {
  const handleClick =
    (onClick: (() => void) | undefined) =>
    (e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    };

  return (
    <div
      className='rounded-md px-3 py-2 text-base font-normal text-secondary-200 hover:text-secondary-100'
      aria-current={current ? 'page' : undefined}
      onClick={handleClick(onClick)}
    >
      <Link href={href}>{name}</Link>
    </div>
  );
};
export default NavBtn;
