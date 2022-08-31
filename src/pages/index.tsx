import React from 'react';

import Btn from '@/components/btn';

import Layout from '@/layout';

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <div className='grid grid-cols-2 items-start justify-center gap-10'>
          <div className='flex flex-col items-start justify-start'>
            <div className='home-title pb-4'>Reimagine your world</div>
            <div className='home-content-normal'>
              Through simple, secure, and scalable technology, NEAR empowers
              millions to invent and explore new experiences. Business,
              creativity, and community are being reimagined for a more
              sustainable and inclusive future.
            </div>
          </div>
          <div className='grid grid-cols-2 items-start justify-start gap-10'>
            <div className='flex flex-col items-start justify-start'>
              <div className='home-content-normal uppercase'>THIS WEEK</div>
              <div className='home-content-bold py-2'>
                Ecosystem Panel: Helping the Climate with Web3
              </div>
              <div className='home-content-normal pb-6'>
                Town halls are taking on a new format with a transition into
                Ecosystem Panels. Join us this Friday for the first one.
              </div>
              <Btn
                label='Develop with Cascadia'
                className='border-black-900 bg-transparent text-black-900'
              />
            </div>
            <div className='flex flex-col items-start justify-start'>
              <div className='home-content-normal uppercase'>FEATURED</div>
              <div className='home-content-bold py-2'>
                Early Bird Tickets for NEARCON are live
              </div>
              <div className='home-content-normal pb-6'>
                Join the Sophon community, Web3 ecosystem, and 200+ hackers IRL
                in Lisbon, Portugal from Sept 11-14. Immerse yourself in talks,
                networking, workshops, and more. Prices increase after July
                31st.
              </div>
              <Btn
                label='Register Today'
                className='border-black-900 bg-transparent text-black-900'
              />
            </div>
          </div>
        </div>
        <div className='gird-cols-home grid-area-home grid grid-rows-home gap-10'>
          <div className='grid-in-image'>image</div>
          <div className='grid-in-title'>title</div>
          <div className='grid-in-content'>content</div>
        </div>
      </div>
    </Layout>
  );
}
