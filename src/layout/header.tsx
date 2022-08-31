/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import NavBtn, { btnProps } from '@/components/navBtn';

type userProps = {
  name: string;
  email: string;
  imageUrl: string;
};

type userNavigationProps = {
  name: string;
  href: string;
};

const user: userProps = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation: btnProps[] = [
  {
    name: 'Learning',
    href: '/learning',
    current: true,
  },
  {
    name: 'Ecosystem',
    href: '/ecosystem',
    current: false,
  },
  {
    name: 'ESG',
    href: '/esg',
    current: false,
  },
  {
    name: 'Community',
    href: '/community',
    current: false,
  },
  {
    name: 'Blog',
    href: '/blog',
    current: false,
  },
];

const userNavigation: userNavigationProps[] = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <div className='sticky top-0 h-0 min-h-full'>
        <Disclosure as='nav' className='bg-transparent backdrop-blur-md'>
          {({ open }: { open: boolean }) => (
            <>
              <div className='mx-auto w-full px-10 md:px-20 lg:px-32'>
                <div className='flex h-16 items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <div
                        className={clsx(
                          'text-xl font-semibold',
                          router.pathname === '/'
                            ? 'text-white'
                            : 'text-main-900'
                        )}
                      >
                        Cascadia
                      </div>
                    </div>
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        {navigation.map((item: btnProps) => (
                          <NavBtn key={item.name} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
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

              <Disclosure.Panel className='md:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={clsx(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className='border-t border-gray-700 pt-4 pb-3'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <Image
                        width={40}
                        height={40}
                        className='rounded-full'
                        src={user.imageUrl}
                        alt=''
                      />
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-white'>
                        {user.name}
                      </div>
                      <div className='text-sm font-medium leading-none text-gray-400'>
                        {user.email}
                      </div>
                    </div>
                    <button
                      type='button'
                      className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    >
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div className='mt-3 space-y-1 px-2'>
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
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
