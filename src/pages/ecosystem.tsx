import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import EcoSubHeader from '@/components/ecoSubHeader';
import EmailBox from '@/components/emailBox';

import Layout from '@/layout';

type itemProps = {
  title: string;
  content: string[];
  // links: string[];
  img: string;
};

const list: itemProps[] = [
  {
    title: 'What is Cascadia?',
    content: [
      "Supported by over one hundred Contributors globally, Cascadia is a Layer-1 blockchain built to explore the nature of incentives on network effects, starting with ve-tokenomics.  We're creating an open-sourced network of services and goods, allowing developers and creators to join a Web 3.0 ecosystem that is easy to access, transparent, and governed by the community.",
    ],
    // links: ['Learn about the Creator Economy on Cascadia'],
    img: '/images/cascadia-image.jpg',
  },
  {
    title: 'Developers / Creators',
    content: [
      "Cascadia is a purpose-built blockchain based on Cosmos SDK architecture, and paves the path forward for developers/creators by supporting all Ethereum smart contracts.  Cascadia is secure, instant, and has low-cost transactions.  Any-to-any communication across blockchains is viable, regardless of the message's payload or consensus algorithm.",
    ],
    // links: ['Follow progress on sharding'],
    img: '/images/developer-image.jpg',
  },
  {
    title: 'Our Mission',
    content: [
      'Cascadia seeks to create a differentiated value proposition by diving deeper than the consensus layer, to explore emergent coordination and incentive alignment in complex adaptive systems.  We will innovative in the space, but will not compromise on security nor trust that constitute our base layer.  Our vision is a self-governing, decentralized future guided by the group intelligence of our community.',
    ],
    // links: [
    //   'Aurora: Ethereum Bridge & EVM',
    //   'Octopus Network: App Chain Interoperability',
    //   'All bridge: Bridge from Solana, Terra, Celo & More',
    // ],
    img: '/images/mission-image.jpg',
  },
];

type animationProps = {
  [key: number]: boolean;
};
const Ecosystem = (): JSX.Element => {
  const [animation, setAnimation] = useState<animationProps>({});
  return (
    <Layout>
      <EcoSubHeader />
      <div className='md:px-10'>
        {/* <div className='m-auto flex max-w-[1300px] flex-col overflow-hidden pb-16 md:my-6 lg:my-14'> */}
        <div className='m-auto mt-0 flex w-full flex-col overflow-hidden lg:mt-12'>
          {list.map((item: itemProps, index: number) => {
            const direction = index % 2 === 0;
            return (
              <InView
                as='div'
                className={clsx(
                  'flex flex-col items-start justify-between pt-12',
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
                    'flex w-full flex-col items-start justify-center overflow-hidden px-10 transition-all duration-1000 ease-out lg:px-16',
                    animation[index]
                      ? 'translate-x-0 opacity-100 delay-200'
                      : `${
                          direction ? '-translate-x-full' : 'translate-x-full'
                        } opacity-0`
                  )}
                >
                  <h2 className='pb-6 text-2xl font-bold text-primary-900 md:pb-0'>
                    {item.title}
                  </h2>
                  <div className='pt-6 text-base text-primary-500'>
                    {item.content.map((p: string, index: number) => (
                      <p
                        key={index}
                        className='pb-5 leading-7 last-of-type:pb-0'
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className='flex w-full flex-col pb-12 text-main-900 md:pb-0'>
                    {/* {item.links.map((link) => (
                      <a
                        key={link}
                        className='w-full overflow-hidden text-ellipsis whitespace-nowrap py-1 text-right hover:underline md:text-left'
                        href='#'
                      >
                        {link}
                      </a>
                    ))} */}
                  </div>
                </div>
                <div
                  className={clsx(
                    'flex w-full items-start justify-center overflow-hidden px-10 transition-all delay-500 duration-1000 lg:px-16',
                    animation[index] ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <div className='relative min-h-[240px] w-full md:min-h-[390px] lg:min-h-[320px] xl:min-h-[220px] 2xl:min-h-[140px]'>
                    <Image
                      className='absolute object-cover'
                      src={item.img}
                      alt=''
                      layout='fill'
                    />
                  </div>
                </div>
              </InView>
            );
          })}
          <EmailBox />
        </div>
      </div>
    </Layout>
  );
};

export default Ecosystem;
