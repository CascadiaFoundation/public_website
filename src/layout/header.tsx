/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavBtn, { btnProps } from '@/components/navBtn';

const navigation: btnProps[] = [
  {
    name: 'Learn',
    link: '/learn',
  },
  {
    name: 'Ecosystem',
    link: '/ecosystem',
  },
  {
    name: 'ESG',
    link: '/esg',
  },
  {
    name: 'Community',
    link: '/community',
    href: 'https://discord.gg/cascadia',
  },
  {
    name: 'Blog',
    link: '/blog',
    href: 'https://medium.com/@CascadiaFoundation',
  },
  {
    name: 'Faucet',
    link: '/faucet',
  },
  {
    name: 'Social',
    link: '/social',
    href: 'https://www.twitter.com/CascadiaSystems',
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
              <div className='mx-auto w-full px-10 lg:px-32'>
                <div className='flex h-16 items-center justify-between'>
                  <div className='flex h-full items-center'>
                    <div className='z-30 flex-shrink-0'>
                      <Link href='/'>
                        <div className='flex cursor-pointer items-center text-xl font-semibold text-white'>
                          <Image
                            src='/images/logo.png'
                            // layout='fill'
                            width='36'
                            height='30'
                            alt='logo'
                          />
                          <span className='pl-2 font-mont text-primary-900'>
                            Cascadia
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className='ml-10 hidden h-full items-baseline md:flex lg:space-x-4'>
                      {navigation.map((item: btnProps) => (
                        <NavBtn key={item.name} {...item} />
                      ))}
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='z-30 inline-flex items-center justify-center rounded-md border border-primary-500 bg-transparent p-2 text-primary-500 hover:border-primary-500/70 hover:text-primary-500/70 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? <ActiveDrawer /> : <InactiveDrawer />}
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
                <div className='h-full w-full' onClick={close}></div>
              </Transition>
              <Transition
                className='top-30 absolute inset-x-0 z-20'
                enter='transition duration-200 ease-out'
                enterFrom='transform -translate-y-full h-0 opacity-0'
                enterTo='transform translate-y-0 h-fit opacity-100'
                leave='transition duration-100 ease-out'
                leaveFrom='transform translate-y-0 h-fit opacity-100'
                leaveTo='transform -translate-y-full h-0 opacity-0'
              >
                <Disclosure.Panel className='duration-3000 h-screen w-full bg-white transition-all md:hidden'>
                  <div className='sm:px-3'>
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.href ? (
                          <a href={item.href} target='_blank' rel='noreferrer'>
                            {/* <Disclosure.Button className={`block w-full rounded-none px-3 py-4 text-base font-medium text-primary-900 transition-all hover:bg-white hover:text-main-900` + ` border-t-2`}> */}
                            <Disclosure.Button
                              className={
                                `block w-full rounded-none px-3 py-4 pl-10 text-left text-base font-medium text-primary-900 transition-all hover:bg-white hover:text-main-900` +
                                (item.link == '/social'
                                  ? ` border-y-2`
                                  : ` border-t-2`)
                              }
                            >
                              {item.name}
                            </Disclosure.Button>
                          </a>
                        ) : (
                          <Link href={item.link}>
                            <Disclosure.Button
                              className={clsx(
                                'block w-full rounded-none border-t-2 px-3 py-4 pl-10 text-left text-base font-medium text-primary-900 transition-all hover:bg-white hover:text-main-900',
                                pathname === item.link && 'text-white'
                              )}
                            >
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        )}
                      </div>
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

const ActiveDrawer = () => {
  document.body.style.overflow = 'hidden';
  return <XMarkIcon className='block h-6 w-6 text-white' aria-hidden='true' />;
};

const InactiveDrawer = () => {
  document.body.style.overflow = '';
  return <Bars3Icon className='block h-6 w-6' aria-hidden='true' />;
};

export default Header;
