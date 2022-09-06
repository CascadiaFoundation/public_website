import Image from 'next/image';
import React from 'react';

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
    img: './images/no_image.png',
  },
  {
    title: 'Developers / Creators',
    content: [
      'The Cascadia Foundation is based on the same security and incentive framework that fueled the development of new Layer 1 application platforms.',
      'Any-to-any communication across blockchains is made possible by Cascadia, regardless of the message`s payload or consensus algorithm. Cascadia paves the path forward and welcomes all developers and creators. It is based on Solana`s POH, supports all smart contracts developed on the Ethereum Blockchain & has secure, instant, low-cost transaction costs.',
    ],
    links: ['Follow progress on sharding'],
    img: './images/no_image.png',
  },
  {
    title: 'Our Vision & Mission',
    content: [
      'We are perfecting a network that anyone can use. We strive to be adaptable in order to innovate in the space, but we cannot and will not compromise on the security and trust that constitute our basic layer. We build a self-governing, decentralized future that is guided by the group intelligence of the community.',
    ],
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
        <div className='my-4 flex flex-col sm:my-12 md:my-24 '>
          {list.map((item: itemProps, index: number) => {
            const direction =
              index % 2 === 0
                ? 'flex-col md:flex-row'
                : 'flex-col md:flex-row-reverse';
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
                    {item.content.map((p: string, index: number) => (
                      <p key={index} className='pb-5 last-of-type:pb-0'>
                        {p}
                      </p>
                    ))}
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
