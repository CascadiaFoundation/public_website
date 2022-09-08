import Image from 'next/image';
import React from 'react';

import Layout from '@/layout';

const Esg = (): JSX.Element => {
  return (
    <Layout>
      <div className='m-auto px-5 md:px-10 lg:px-32'>
        <div className='mb-10 flex flex-col items-center justify-center pt-16'>
          <div className='text-center text-2xl font-bold text-primary-900 md:text-left md:text-4xl'>
            Why does it matter?
          </div>
          <div className='my-6 max-w-[850px] text-center text-base font-normal text-primary-500'>
            Cascadia embraced the ESG framework, which has now grown into a
            comprehensive framework with important components relating to
            environmental and social impact as well as how governance structures
            may be adjusted to optimize stakeholder well-being.
          </div>
          <div className='grid grid-cols-1 px-2 py-6 sm:grid-cols-3'>
            <div className='mt-10 flex flex-col items-center justify-center px-2 text-main-900 sm:mt-0 sm:px-12'>
              <div className='relative h-14 w-14'>
                <Image
                  className='absolute'
                  src='/images/environmental.png'
                  layout='fill'
                  alt=''
                />
              </div>
              <div className='mt-3 text-base'>Environmental</div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center px-2 text-main-900 sm:mt-0 sm:px-12'>
              <div className='relative h-14 w-14'>
                <Image
                  className='absolute'
                  src='/images/social.png'
                  layout='fill'
                  alt=''
                />
              </div>
              <div className='mt-3 text-base'>Social</div>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center px-2 text-main-900 sm:mt-0 sm:px-12'>
              <div className='relative h-14 w-14'>
                <Image
                  className='absolute'
                  src='/images/governance.png'
                  layout='fill'
                  alt=''
                />
              </div>
              <div className='mt-3 text-base'>Governance</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-main-900 py-6 md:py-12'>
        <div className='mb-8 px-10 text-center text-2xl font-bold text-white md:text-4xl'>
          EEP - Engagement, Education, Policy
        </div>
        <div className='text-center text-lg font-semibold text-white md:text-2xl'>
          Our Key tools on environmental importance
        </div>
      </div>

      <div className='bg-white py-16'>
        <div className='m-auto px-5 md:px-10 lg:px-32'>
          <div className='flex flex-col items-start justify-between pb-5 md:flex-row md:pb-20'>
            <div className='flex w-full items-center justify-center pr-0 md:w-1/2 md:pr-5'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='/images/no_image.png'
                  alt=''
                  layout='fill'
                />
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-center pl-0 pt-16 text-primary-500 md:w-1/2 md:pl-5 md:pt-0'>
              <p className='w-full pb-5 text-center text-2xl font-semibold text-primary-900 sm:text-left'>
                Engagement with companies on the physical and transition risks
                of climate change
              </p>
              <p className='pb-5 text-center text-base font-normal text-primary-500 sm:text-left'>
                In Cascadia, we think that investors should interact with
                issuers to make sure that climate data, scenario analysis, and
                related disclosures are comprehensive enough to support thorough
                climate risk analysis in the investment process
              </p>
            </div>
          </div>
        </div>

        <div className='m-auto px-5 md:px-10 lg:px-32'>
          <div className='flex flex-col-reverse items-start justify-between pb-5 md:flex-row md:pb-14'>
            <div className='flex w-full flex-col items-start justify-center pr-0 pt-16 text-primary-500 md:w-1/2 md:pr-5 md:pt-0'>
              <p className='w-full pb-5 text-center text-2xl font-semibold text-primary-900 sm:text-left'>
                Education within our Foundation
              </p>
              <p className='pb-5 text-center text-base font-normal text-primary-500 sm:text-left'>
                In order to give our users the climate-related research they
                deserve, we all must continue to educate ourselves on climate
                change.
              </p>
            </div>
            <div className='flex w-full items-center justify-center pl-0 md:w-1/2 md:pl-5'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='/images/no_image.png'
                  alt=''
                  layout='fill'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='m-auto px-5 md:px-10 lg:px-32'>
          <div className='flex flex-col items-start justify-between pb-5 md:flex-row md:pb-14'>
            <div className='flex w-full items-center justify-center pr-0 md:w-1/2 md:pr-5'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='/images/no_image.png'
                  alt=''
                  layout='fill'
                />
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-center pl-0 pt-16 text-primary-500 md:w-1/2 md:pl-5 md:pt-0'>
              <p className='w-full pb-5 text-center text-2xl font-semibold text-primary-900 sm:text-left'>
                Policy that supports our efforts
              </p>
              <p className='pb-5 text-center text-base font-normal text-primary-500 sm:text-left'>
                Users need to keep meeting with policymakers to ensure that they
                have the resources necessary to perform the function of finance,
                i.e., the effective capital allocation that aids in tackling the
                existential threat of climate change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Esg;
