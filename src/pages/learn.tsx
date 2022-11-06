// import Image from 'next/image';
import React from 'react';

import Card from '@/components/card';
import EmailBox from '@/components/emailBox';
import LearnSubHeader from '@/components/learnSubHeader';

import Layout from '@/layout';

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
      'Cascadia is rich in internal and external feedback, both negative and positive, leading to reflexive phenomena such as self-organization, self-production, and self-regulation.',
    iconUrl: '/images/icon/reflexivity-icon.svg',
    // button: 'Explore Community',
  },
];

const Learn = (): JSX.Element => {
  return (
    <Layout>
      <LearnSubHeader />
      <div className='m-auto px-10 lg:px-32'>
        <div className='mt-24'>
          <div className='pb-7 text-4xl font-bold text-primary-900 sm:text-4xl md:text-left'>
            The Blockchain Future
          </div>
          <div className='text-base font-normal leading-7 text-primary-500 md:text-left'>
            Cascadia is a purpose-built Layer-1 EVM compatible based on Cosmos
            SDK architecture. Built for fairness, speed, and sustainability, the
            Cascadia blockchain offers a unified solution to cross-chain
            communications that satisfies the requirements of platform
            developers and dapp builders.
          </div>
        </div>

        <div className='mt-24'>
          <div className='pb-7 text-4xl font-bold text-primary-900 sm:text-4xl md:text-left'>
            As a complex adaptive system (CAS), the Cascadia blockchain retains
            the following characteristics:
          </div>
          <div className='z-10 hidden grid-cols-3 gap-3 bg-white p-5 md:gap-6 lg:grid'>
            {cardList.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className='space-y-4 lg:hidden lg:gap-6'>
            {cardList.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>

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
        <EmailBox />
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
    </Layout>
  );
};

export default Learn;
