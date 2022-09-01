import Image from 'next/image';
import React from 'react';

import Layout from '@/layout';

type itemProps = {
  title: string;
  content: string;
  links: string[];
  img: string;
};

const list: itemProps[] = [
  {
    title: 'Founders',
    content:
      'The Creator Economy requires robust infrastructure including a set of intuitive developer tools, and an engaged, decentralized community.',
    links: ['Learn about the Creator Economy on Cascadia'],
    img: './images/no_image.png',
  },
  {
    title: 'Creators',
    content:
      'Cascadia is eliminating the barriers to Web 3 adoption. With high speeds, low fees, and progressive UX, Cascadia’s climate-neutral blockchain is ready for explosive growth.',
    links: ['Follow progress on sharding'],
    img: './images/no_image.png',
  },
  {
    title: 'Developers',
    content:
      'NEAR runs in concert with Ethereum, Polkadot, Cosmos, and more, allowing for the free flow of assets and communication between networks for the betterment of all.',
    links: [
      'Aurora: Ethereum Bridge & EVM',
      'Octopus Network: App Chain Interoperability',
      'Allbridge: Bridge from Solana, Terra, Celo & More',
    ],
    img: './images/no_image.png',
  },
];

const Ecosystem = (): JSX.Element => {
  return (
    <Layout>
      <div className='m-auto md:px-10 lg:px-32'>
        <div className='flex flex-col sm:my-12 md:my-24 '>
          {list.map((item: itemProps, index: number) => {
            const direction =
              index % 2 === 0
                ? 'flex-col-reverse md:flex-row'
                : 'flex-col-reverse md:flex-row-reverse';
            return (
              <div
                key={index}
                className={`${direction} flex items-center justify-between`}
              >
                <div className='m-0 flex w-full flex-col items-start justify-center p-6 sm:p-8 md:mx-4 md:my-8 md:w-1/2'>
                  <h2 className='text-2xl font-bold text-primary-900'>
                    {item.title}
                  </h2>
                  <div className='py-6 text-base text-primary-500'>
                    {item.content}
                  </div>
                  <div className='text-base text-main-900'>
                    {item.links.map((link) => (
                      <div key={link} className='py-1'>
                        <a href='#'>{link}</a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='m-0 flex w-full items-center justify-center p-6 sm:p-8 md:mx-4 md:my-8 md:w-1/2 md:p-0'>
                  <div className='relative h-[300px] w-full'>
                    <Image
                      className='absolute'
                      src={item.img}
                      alt=''
                      layout='fill'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Ecosystem;
