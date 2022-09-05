/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from '@headlessui/react';
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
          {({ open, close }: { open: boolean; close: () => void }) => (
            <>
              <div className='mx-auto w-full px-10 md:px-20 lg:px-32'>
                <div className='flex h-16 items-center justify-between'>
                  <div className='flex h-full items-center'>
                    <div className='z-30 flex-shrink-0'>
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
                    <Disclosure.Button className='z-30 inline-flex items-center justify-center rounded-md bg-transparent p-2 text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white'>
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

              <Transition
                className='fixed inset-0 z-10'
                enter='transition duration-200 ease-out'
                enterFrom='transform  opacity-0'
                enterTo='transform opacity-100'
                leave='transition duration-100 ease-out'
                leaveFrom='transform opacity-100'
                leaveTo='transform opacity-0'
              >
                <div
                  className='h-full w-full bg-black/30'
                  onClick={close}
                ></div>
              </Transition>
              <Transition
                className='absolute inset-x-0 top-0 z-20'
                enter='transition duration-200 ease-out'
                enterFrom='transform -translate-y-full h-0 opacity-0'
                enterTo='transform translate-y-0 h-fit opacity-100'
                leave='transition duration-100 ease-out'
                leaveFrom='transform translate-y-0 h-fit opacity-100'
                leaveTo='transform -translate-y-full h-0 opacity-0'
              >
                <Disclosure.Panel className='duration-3000 h-full w-full bg-main-900 transition-all md:hidden'>
                  <div className='space-y-1 px-2 pt-14 pb-3 sm:px-3'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <Disclosure.Button
                          className={clsx(
                            'block w-full rounded-md px-3 py-2 text-base font-medium text-secondary-100 transition-all hover:bg-white hover:text-main-900',
                            pathname === item.href && 'text-white'
                          )}
                        >
                          {item.name}
                        </Disclosure.Button>
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Header;
