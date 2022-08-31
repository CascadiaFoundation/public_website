import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

export type btnProps = {
  name: string;
  href: string;
  current: boolean;
  onClick?: () => void;
};

const NavBtn = ({ name, href, current, onClick }: btnProps): JSX.Element => {
  const { pathname } = useRouter();

  const handleClick =
    (onClick: (() => void) | undefined) =>
    (e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    };

  return (
    <a
      key={name}
      href={href}
      className={clsx(
        pathname === '/'
          ? current
            ? 'text-white-100'
            : 'text-white'
          : current
          ? 'text-black-900'
          : 'text-black-500',
        'rounded-md px-3 py-2 text-base font-normal'
      )}
      aria-current={current ? 'page' : undefined}
      onClick={handleClick(onClick)}
    >
      {name}
    </a>
  );
};
export default NavBtn;
