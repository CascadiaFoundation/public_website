import Link from 'next/link';
import React from 'react';

import Header from '@/layout/header';

// const cardList = [
//   {
//     title: 'Ready to Build?',
//     content:
//       'The Cascadia network is covered by an application development layer, which is utilized by developers to  enjoy low fees, high speeds, and infinite scalabilities without having to learn new programming languages or increase complexity.',
//     button: "I'm a Developer",
//   },
//   {
//     title: 'Grow through Us',
//     content:
//       'There are various ways to get involved with Cascadia, whether as a developer creating dApps and protocols or as a member of the community contributing in the development of future blockchain possibilities.',
//     button: "I'm a Founder / Creator",
//   },
//   {
//     title: 'United Front',
//     content:
//       'Our kinship is the heart of everything. Cascadia Academy serves as a free, community-driven, open-source information base. It was created & build for the community, by the community.',
//     button: 'Explore Community',
//   },
// ];
// width: 100vw;
// height: 100vh;
// object - fit: cover;
// position: fixed;
// left: 0;
// right: 0;
// top: 0;
// bottom: 0;
// z - index: -1;
export default function Home() {
  return (
    <div>
      <Header />
      <video
        loop
        autoPlay
        muted
        className='absolute left-0 right-0 top-0 bottom-0 -z-10 h-screen w-screen object-cover'
      >
        <source src='home.mp4' type='video/mp4' />
      </video>
      <div className='justify-left flex h-screen items-center px-8 text-4xl font-light text-primary-500 md:px-10 lg:px-32'>
        <div>
          <span>The World&apos;s First </span>
          <span className='font-bold'>Neocybernetic </span>
          <span>Blockchain</span>
        </div>
      </div>
      <div className='text-normal absolute bottom-0 left-0 flex items-center px-8 py-7 text-primary-500 md:px-10 lg:px-32'>
        <div className='mr-6'>
          <Link href='/privacy'>Privacy Policy</Link>
        </div>
        <div>
          <Link href='/terms'>Terms of Use</Link>
        </div>
      </div>
    </div>
  );
}
