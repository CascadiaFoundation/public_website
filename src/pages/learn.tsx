import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Card from '@/components/card';
import EmailBox from '@/components/emailBox';
import LearnSubHeader from '@/components/learnSubHeader';

import Layout from '@/layout';

type itemProps = {
  title: string;
  content: string[];
  // links: string[];
  img: string;
};

const list: itemProps[] = [
  {
    title: 'An Open Economy',
    content: [
      'Cascadia is a EVM-compatible platform based on Cosmos SDK architecture.  Built for fairness, speed, and sustainability, the Cascadia blockchain offers a unified solution to cross-chain communications that satisfies the requirements of platform developers. Cascadia will adopt the IBC (Inter-Blockchain Communication) protocol, allowing users freely exchange assets and data across sovereign networks.',
    ],
    // links: ['Learn about the Creator Economy on Cascadia'],
    img: '/images/AIface-image.jpg',
  },
];

const cardList = [
  {
    title: 'Mutuality',
    content:
      'Blockchain actors interact in parallel, cooperatively, creating multiple simultaneous interactions among subsystems.',
    iconUrl: '/images/icon/mutuality-icon.svg',
    // button: "I'm a Developer",
  },
  {
    title: 'Evolvability',
    content:
      'Cascadia evolves in an opportunistic manner, rather than via top-down planning.',
    iconUrl: '/images/icon/evolvability-icon.svg',
    // button: "I'm a Founder / Creator",
  },
  {
    title: 'Reflexivity',
    content:
      'Cascadia is rich in internal and external feedback, leading to reflexive phenomena such as self-organization, self-production, and self-regulation.',
    iconUrl: '/images/icon/reflexivity-icon.svg',
    // button: 'Explore Community',
  },
];

type animationProps = {
  [key: number]: boolean;
};

const Learn = (): JSX.Element => {
  const [animation, setAnimation] = useState<animationProps>({});
  return (
    <Layout>
      <LearnSubHeader />
      <div className='m-auto px-10 lg:px-32'>
        <div className='mt-12 lg:mt-24'>
          <div className='pb-12 text-4xl font-bold text-primary-900 sm:text-4xl lg:text-center'>
            The Cybernetic Future
          </div>
          <div className='pb-12 text-base font-normal text-primary-500 sm:text-base lg:text-center'>
            As a complex adaptive system (CAS), the Cascadia blockchain retains
            the following characteristics:
          </div>
          <div className='z-10 hidden grid-cols-3 gap-3 bg-white p-5 md:gap-6 lg:grid'>
            {cardList.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className='space-y-12 lg:hidden lg:gap-6'>
            {cardList.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>

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
                    'flex w-full flex-col items-start justify-center overflow-hidden pb-12 transition-all duration-1000 ease-out md:pb-0 md:pr-6',
                    animation[index]
                      ? 'translate-x-0 opacity-100 delay-200'
                      : `${
                          direction ? '-translate-x-full' : 'translate-x-full'
                        } opacity-0`
                  )}
                >
                  <div className='relative min-h-[240px] w-full md:min-h-[360px] lg:min-h-[330px] xl:min-h-[240px] 2xl:min-h-[200px]'>
                    <Image
                      className='absolute object-cover'
                      src={item.img}
                      alt=''
                      layout='fill'
                    />
                  </div>
                </div>
                <div
                  id='learn-text'
                  className={clsx(
                    'flex w-full flex-col items-start justify-center overflow-hidden transition-all delay-500 duration-1000 md:pl-6',
                    animation[index] ? 'opacity-100' : 'opacity-0'
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
                </div>
              </InView>
            );
          })}
        </div>

        {/* <div className='mt-12 h-[200px] bg-ai-background bg-cover bg-center md:h-[400px] lg:mt-24 lg:h-[582px]'></div>

        <div className='mt-12 lg:mt-24'>
          <div className='pb-12 text-4xl font-bold text-primary-900 sm:text-4xl lg:text-center'>
            An Open Economy
          </div>
          <div className='text-base font-normal leading-7 text-primary-500 md:text-left'>
            Cascadia is a purpose-built EVM compatible platform based on
            Cosmos SDK architecture. Built for fairness, speed, and
            sustainability, the Cascadia blockchain offers a unified solution to
            cross-chain communications that satisfies the requirements of
            platform developers. Cascadia will adopt the IBC (Inter-Blockchain Communication)
            protocol, allowing users freely exchange assets and data across sovereign networks.
          </div>
        </div> */}

        {/* <div className='relative mt-6 grid-cols-4 p-6 sm:mt-12 md:mt-24 md:p-0 lg:grid space-y-4'>
          <div className='z-10 col-span-3 col-start-2 mt-8 hidden grid-cols-3 gap-3 bg-white p-5 md:gap-6 lg:grid'>
            {cardList.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className='mt-8 grid grid-cols-1 gap-3 md:grid-cols-3 lg:hidden lg:gap-6'>
            {cardList.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className='absolute top-0 left-0 hidden h-full w-1/2 pr-10 lg:block'>
            <Image
              className='mr-4 h-full w-full object-cover'
              src='/images/learn-image.png'
              alt='learn image'
              layout='fill'
            />
          </div>
        </div> */}

        {/* <div className='my-5 gap-x-10 p-6 text-center sm:my-24 md:p-0'>
          <h1 className='pb-7 text-2xl font-bold text-primary-900 sm:text-4xl'>
            Join our community
          </h1>
          <div className='pb-8 text-xl font-normal text-primary-500'>
            Never miss a critical announcement. Don't just follow -- be involved.
            <br />
            {`Don't just follow; be involved.`}
          </div>
          <div className='relative mx-auto mb-6 flex h-10 w-full max-w-[600px] items-center border border-primary-900/50 bg-transparent'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='absolute inset-y-0 left-0 m-auto p-2 text-base text-primary-500'
            />
            <input
              className='h-full w-full p-2 pl-10 focus:outline-none md:placeholder:text-primary-500'
              placeholder='Receive email updates'
            />
            <Btn
              label='Subscribe'
              className='absolute inset-y-0 right-0 border-0 bg-primary-900/50 text-secondary-200 hover:bg-primary-900/80'
            />
          </div>
          <div className='mt-12 flex items-center justify-center gap-16'>
            <Link href='#'>
              <FontAwesomeIcon
                icon={faDiscord}
                className='text-5xl text-main-900'
              />
            </Link>
            <Link href='#'>
              <FontAwesomeIcon
                icon={faTwitter}
                className='text-5xl text-main-900'
              />
            </Link>
          </div>
        </div> */}
      </div>
      <EmailBox />
    </Layout>
  );
};

export default Learn;
