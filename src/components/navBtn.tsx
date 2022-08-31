import clsx from 'clsx';
import Link from 'next/link';
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
    <div
      className={clsx(
        pathname === '/'
          ? current
            ? 'text-secondary-100'
            : 'text-white'
          : current
          ? 'text-primary-900'
          : 'text-primary-500',
        'rounded-md px-3 py-2 text-base font-normal'
      )}
      aria-current={current ? 'page' : undefined}
      onClick={handleClick(onClick)}
    >
      <Link href={href}>{name}</Link>
    </div>
  );
};
export default NavBtn;
