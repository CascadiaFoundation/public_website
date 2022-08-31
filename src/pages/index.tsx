import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import Btn from '@/components/btn';
import Card from '@/components/card';

import Layout from '@/layout';

const cardList = [
  {
    title: 'Build',
    content:
      'Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.',
    button: 'I`m a Developer',
  },
  {
    title: 'Grow',
    content:
      'Startup or grow up on a platform that sets you up for success. Investors, partners, and users are waiting.',
    button: 'I`m a Founder / Creator',
  },
  {
    title: 'Develop',
    content:
      'When you find your purpose, you find your people. Pick a wallet, create an account, and start contributing today.',
    button: 'Explore Community',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className='m-auto md:px-20 lg:px-32'>
        <div className='mt-12 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='p-6 sm:col-span-2 sm:p-0'>
            <div className='home-title-lg pb-4 text-center md:text-left'>
              Reimagine your world
            </div>
            <div className='home-content-base text-center md:text-left'>
              Through simple, secure, and scalable technology, Cascadia empowers
              millions to invent and explore new experiences. Business,
              creativity, and community are being reimagined for a more
              sustainable and inclusive future.
            </div>
          </div>
          <div className='flex flex-col p-6 sm:p-0'>
            <div className='home-content-base text-center uppercase sm:text-left'>
              This week
            </div>
            <div className='home-content-bold py-2 text-center sm:text-left'>
              Ecosystem Panel: Helping the Climate with Web3
            </div>
            <div className='home-content-base flex-auto pb-6 text-center sm:text-left'>
              Town halls are taking on a new format with a transition into
              Ecosystem Panels. <br />
              Join us this Friday for the first one.
            </div>
            <Btn
              label='Develop with Cascadia'
              className='border-black-900 bg-transparent text-black-900'
            />
          </div>
          <div className='flex flex-col p-6 sm:p-0'>
            <div className='home-content-base text-center uppercase sm:text-left'>
              Featured
            </div>
            <div className='home-content-bold py-2 text-center sm:text-left'>
              Early Bird Tickets for CascadiaCON are live
            </div>
            <div className='home-content-base flex-auto pb-6 text-center sm:text-left'>
              Join the Sophon community, Web3 ecosystem, and 200+ hackers IRL in
              Lisbon, Portugal from Sept 11-14. Immerse yourself in talks,
              networking, workshops, and more. Prices increase after July 31st.
            </div>
            <Btn
              label='Register Today'
              className='border-black-900 bg-transparent text-black-900'
            />
          </div>
        </div>

        <div className='relative mt-24 grid-cols-4 gap-x-10 lg:grid'>
          <div className='col-span-2 p-6 sm:p-0 lg:col-start-3'>
            <div className='home-title-lg text-center md:text-left'>
              Create an account & choose a path
            </div>
            <div className='home-content-base py-6'>
              The best way to stake your claim in the Cascadia verse is by
              creating an account (wallet). Then, choose the first step in your
              journey.
            </div>
            <Btn
              label='Create an Account'
              className='w-full bg-black-900 text-white-200 sm:w-fit'
            />
          </div>
          <div className='col-span-3 col-start-2 mt-8 hidden grid-cols-3 gap-6 bg-white p-6 lg:grid'>
            {cardList.map((item) => (
              <Card key={item.title} className='p-6' {...item} />
            ))}
          </div>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:hidden'>
            {cardList.map((item) => (
              <Card key={item.title} className='p-6' {...item} />
            ))}
          </div>
          <div className='absolute top-0 left-0 -z-10 hidden h-full w-1/2 pr-10 lg:block'>
            <div className='h-full w-full bg-[#E9EBEE]' />
          </div>
        </div>

        <div className='my-24 gap-x-10 p-6 text-center sm:p-0'>
          <div className='home-title-lg pb-6 text-main-900'>
            Cascadia Community
          </div>
          <div className='home-content-base pb-12'>
            Join the movement. Follow along, meet fellow builders on Discord or
            get updates.
          </div>
          <div className='relative mx-auto mb-6 flex h-10 w-full items-center border border-main-900 bg-transparent sm:w-1/2 lg:w-1/3'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='absolute inset-y-0 left-0 m-auto p-2 text-base text-black-500'
            />
            <input
              className='h-full w-full p-2 pl-10 placeholder-shown:hidden focus:outline-none md:placeholder:text-black-500'
              placeholder='Receive email updates'
            />
            <Btn
              label='Subscribe'
              className='absolute inset-y-0 right-0 border-0 bg-main-900 text-white-200'
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
        </div>
      </div>
    </Layout>
  );
}
