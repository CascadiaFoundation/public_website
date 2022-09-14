import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Layout from '@/layout';

type itemProps = {
  title: string;
  content: string[];
  links: string[];
  img: string;
};

const list: itemProps[] = [
  {
    title: 'What is Cascadia?',
    content: [
      'In order to integrate the greatest aspects of cryptocurrency solutions, we are creating an open-sourced blockchain ecosystem of services and goods. It entails investigating cutting-edge encryption methods, creating consensus mechanisms, and designing software applications that are simple to use. This allows developers, creators, organizations, and people all over the world to join an ecosystem for Web 3.0 that is easy to reach, transparent, and governed by the community.',
    ],
    links: ['Learn about the Creator Economy on Cascadia'],
    img: '/images/no_image.png',
  },
  {
    title: 'Developers / Creators',
    content: [
      'The Cascadia Foundation is based on the same security and incentive framework that fueled the development of new Layer 1 application platforms.',
      'Any-to-any communication across blockchains is made possible by Cascadia, regardless of the message`s payload or consensus algorithm. Cascadia paves the path forward and welcomes all developers and creators. It is based on Solana`s POH, supports all smart contracts developed on the Ethereum Blockchain & has secure, instant, low-cost transaction costs.',
    ],
    links: ['Follow progress on sharding'],
    img: '/images/no_image.png',
  },
  {
    title: 'Our Vision & Mission',
    content: [
      'We are perfecting a network that anyone can use. We strive to be adaptable in order to innovate in the space, but we cannot and will not compromise on the security and trust that constitute our basic layer. We build a self-governing, decentralized future that is guided by the group intelligence of the community.',
    ],
    links: [
      'Aurora: Ethereum Bridge & EVM',
      'Octopus Network: App Chain Interoperability',
      'All bridge: Bridge from Solana, Terra, Celo & More',
    ],
    img: '/images/no_image.png',
  },
];

type animationProps = {
  [key: number]: boolean;
};
const Ecosystem = (): JSX.Element => {
  const [animation, setAnimation] = useState<animationProps>({});
  return (
    <Layout>
      <div className='md:px-10'>
        <div className='m-auto flex max-w-[1300px] flex-col overflow-hidden pb-16 md:my-6 lg:my-14'>
          {list.map((item: itemProps, index: number) => {
            const direction = index % 2 === 0;
            return (
              <InView
                as='div'
                className={clsx(
                  'flex flex-col items-start justify-between pt-16',
                  direction ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
                key={index}
                rootMargin='-50px'
                threshold={0}
                onChange={(inView) =>
                  setAnimation((state) => ({ ...state, [index]: inView }))
                }
              >
                <div
                  className={clsx(
                    'flex w-full flex-col items-start justify-center overflow-hidden px-5 transition-all duration-1000 ease-out',
                    animation[index]
                      ? 'translate-x-0 opacity-100 delay-200'
                      : `${
                          direction ? '-translate-x-full' : 'translate-x-full'
                        } opacity-0`
                  )}
                >
                  <h2 className='text-2xl font-bold text-primary-900'>
                    {item.title}
                  </h2>
                  <div className='py-6 text-base text-primary-500'>
                    {item.content.map((p: string, index: number) => (
                      <p key={index} className='pb-5 last-of-type:pb-0'>
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className='flex w-full flex-col pb-5 text-main-900 md:pb-0'>
                    {item.links.map((link) => (
                      <a
                        key={link}
                        className='w-full overflow-hidden text-ellipsis whitespace-nowrap py-1 text-right hover:underline md:text-left'
                        href='#'
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  className={clsx(
                    'flex w-full items-start justify-center overflow-hidden px-5 transition-all delay-500 duration-1000',
                    animation[index] ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <div className='relative h-[300px] w-full'>
                    <Image
                      className='absolute'
                      src={item.img}
                      alt=''
                      layout='fill'
                    />
                  </div>
                </div>
              </InView>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Ecosystem;
