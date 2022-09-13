import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export type btnProps = {
  name: string;
  href?: string;
  link: string;
  onClick?: () => void;
};

const NavBtn = ({ name, href, link, onClick }: btnProps): JSX.Element => {
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
    <div className='h-full px-3'>
      <div className='relative h-full'>
        <button
          className={clsx(
            "hover:text-red inline-flex h-full cursor-pointer items-center text-base font-normal before:absolute before:top-0 before:h-[2px] before:w-full before:-translate-y-full before:rounded-sm before:bg-white before:opacity-0 before:transition-all before:content-[''] hover:before:translate-y-0 hover:before:opacity-100",
            pathname === link
              ? 'text-white before:translate-y-0 before:opacity-100'
              : 'text-secondary-100'
          )}
          onClick={handleClick(onClick)}
        >
          {href ? (
            <a href={href} target='_blank' rel='noreferrer'>
              {name}
            </a>
          ) : (
            <Link href={link}>{name}</Link>
          )}
        </button>
      </div>
    </div>
  );
};
export default NavBtn;
