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
    title: 'Ready to Build?',
    content:
      'The Cascadia network is covered by an application development layer, which is utilized by developers to  enjoy low fees, high speeds, and infinite scalabilities without having to learn new programming languages or increase complexity.',
    button: 'I`m a Developer',
  },
  {
    title: 'Grow through Us',
    content:
      'There are various ways to get involved with Cascadia, whether as a developer creating dApps and protocols or as a member of the community contributing in the development of future blockchain possibilities.',
    button: 'I`m a Founder / Creator',
  },
  {
    title: 'United Front',
    content:
      'Our kinship is the heart of everything. Cascadia Academy serves as a free, community-driven, open-source information base. It was created & build for the community, by the community.',
    button: 'Explore Community',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className='m-auto md:px-10 lg:px-32'>
        <div className='mt-12 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='p-6 sm:col-span-2 md:p-0'>
            <h1 className='home-title-lg pb-4 text-center md:text-left'>
              Reinterpret in a new way
            </h1>
            <div className='home-content-base text-center md:text-left'>
              Cascadia offers a standard process to cross-chain communication
              that satisfies the requirements of platform developers — no
              integration effort is required of them — and application builders
              — one straightforward protocol and API to access global liquidity
              and communicate with the whole ecosystem.
            </div>
          </div>
          <div className='flex flex-col p-6 md:p-2'>
            <div className='home-content-base uppercase sm:text-left'>
              This week
            </div>
            <div className='home-content-bold py-2 text-left'>
              Ecosystem Panel: Helping the Climate with Web3
            </div>
            <div className='home-content-base flex-auto pb-6 text-left lg:flex-none'>
              Town halls are taking on a new format with a transition into
              Ecosystem Panels. <br />
              Join us this Friday for the first one.
            </div>
            <Btn
              label='Develop with Cascadia'
              className='border-primary-900 bg-transparent text-primary-900 hover:bg-primary-900/10 lg:w-fit '
            />
          </div>
          <div className='flex flex-col p-6 md:p-2'>
            <div className='home-content-base uppercase sm:text-left'>
              Featured
            </div>
            <div className='home-content-bold py-2 text-left'>
              Early Bird Tickets for NEARCON are live
            </div>
            <div className='home-content-base flex-auto pb-6 text-left lg:flex-none'>
              Join the Sophon community, Web3 ecosystem, and 200+ hackers IRL in
              Lisbon, Portugal from Sept 11-14. Immerse yourself in talks,
              networking, workshops, and more. Prices increase after July 31st.
            </div>
            <Btn
              label='Register Today'
              className='border-primary-900 bg-transparent text-primary-900 hover:bg-primary-900/10 lg:w-fit '
            />
          </div>
        </div>

        <div className='relative mt-24 grid-cols-4 gap-x-10 p-6 md:p-0 lg:grid'>
          <div className='col-span-2 p-6 md:p-0 lg:col-start-3'>
            <h1 className='home-title-lg text-center md:text-left'>
              Create an account & choose a path
            </h1>
            <div className='home-content-base py-6'>
              The best way to stake your claim in the Sophon verse is by
              creating an account (wallet). Then, choose the first step in your
              journey.
            </div>
            <Btn
              label='Create an Account'
              className='w-full bg-primary-900 text-secondary-200 hover:bg-black/70 sm:w-fit'
            />
          </div>
          <div className='z-10 col-span-3 col-start-2 mt-8 hidden grid-cols-3 gap-3 bg-white p-6 md:gap-6 lg:grid'>
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
            <div className='h-full w-full bg-[#E9EBEE]' />
          </div>
        </div>

        <div className='my-24 gap-x-10 p-6 text-center md:p-0'>
          <h1 className='home-title-lg pb-6 text-main-900'>
            Join our community
          </h1>
          <div className='pb-12 text-xl font-normal text-primary-500'>
            Never miss a critical announcement concerning Cascadia Foundation or
            a community development.
            <br />
            Don`t just follow; be involved.
          </div>
          <div className='relative mx-auto mb-6 flex h-10 w-full items-center border border-main-900 bg-transparent sm:w-1/2 lg:max-w-[600px]'>
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
              className='absolute inset-y-0 right-0 border-0 bg-main-900 text-secondary-200 hover:bg-main-900/80'
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
