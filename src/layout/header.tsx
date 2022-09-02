/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavBtn, { btnProps } from '@/components/navBtn';

const navigation: btnProps[] = [
  {
    name: 'Learning',
    href: '/learning',
  },
  {
    name: 'Ecosystem',
    href: '/ecosystem',
  },
  {
    name: 'ESG',
    href: '/esg',
  },
  {
    name: 'Community',
    href: '/community',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

const Header = (): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <>
      <div className='z-10 h-0 min-h-full'>
        <Disclosure as='nav' className='bg-transparent'>
          {({ open }: { open: boolean }) => (
            <>
              <div className='mx-auto w-full px-10 md:px-20 lg:px-32'>
                <div className='flex h-16 items-center justify-between'>
                  <div className='z-10 flex h-full items-center'>
                    <div className='flex-shrink-0'>
                      <Link href='/'>
                        <div className='cursor-pointer text-xl font-semibold text-white'>
                          Cascadia
                        </div>
                      </Link>
                    </div>
                    <div className='ml-10 hidden h-full items-baseline space-x-4 md:flex'>
                      {navigation.map((item: btnProps) => (
                        <NavBtn key={item.name} {...item} />
                      ))}
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='z-10 inline-flex items-center justify-center rounded-md bg-transparent p-2 text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      ) : (
                        <Bars3Icon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='absolute inset-x-0 top-0 bg-main-900 md:hidden'>
                <div className='space-y-1 px-2 pt-14 pb-3 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      className={clsx(
                        'block w-full rounded-md px-3 py-2 text-base font-medium text-secondary-100 transition-all hover:bg-white hover:text-main-900',
                        pathname === item.href && 'text-white'
                      )}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Header;
