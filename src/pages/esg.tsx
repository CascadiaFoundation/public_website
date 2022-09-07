import Image from 'next/image';
import React from 'react';

import Layout from '@/layout';

const Esg = (): JSX.Element => {
  return (
    <Layout>
      <div className='m-auto px-5 md:px-10 lg:px-32'>
        <div className='flex flex-col items-center justify-center py-16'>
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
                  src='./images/environmental.png'
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
                  src='./images/social.png'
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
                  src='./images/governance.png'
                  layout='fill'
                  alt=''
                />
              </div>
              <div className='mt-3 text-base'>Governance</div>
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto bg-white px-5 md:px-10 lg:px-32'>
        <div className='border-b border-b-secondary-100'>
          <div className='pt-16 text-center text-2xl font-semibold text-main-900'>
            Environmental
          </div>
          <div className='py-6 text-left text-base text-primary-500'>
            <p className='pb-5'>
              A recent analysis found that Cascadia’s energy consumption
              estimates are lower than any major competitor, even Visa! Beyond
              estimates, the community is currently auditing their energy
              consumption and CO2 generation based on detailed reports from all
              network validators.
            </p>
            <p className='pb-5'>
              This will allow users to accurately predict their energy usage and
              mitigate it through community approved carbon credit purchases and
              Cascadia-based initiatives such as SEEDS, LocalScale, and
              Corcocoin projects. All these efforts ensure Cascadia provides the
              gold standard of environmental transparency in the blockchain
              industry.
            </p>
          </div>
          <div className='flex flex-col items-start justify-between pb-5 md:flex-row md:pb-12'>
            <div className='flex w-full items-center justify-center pr-0 md:w-1/2 md:pr-5'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='./images/no_image.png'
                  alt=''
                  layout='fill'
                />
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-center pl-0 pt-10 text-primary-500 md:w-1/2 md:pl-5 md:pt-0'>
              <p className='pb-5'>
                Consuming less energy or even going carbon neutral isn’t enough
                when it comes to having a positive environmental impact.
                Projects must actively find ways to foster environmental
                regeneration. With all the ESG tools available to developers,
                Cascadia has attracted many projects whose sole mission is
                improving and maintaining our natural resources. This has pushed
                Cascadia far ahead of competitors when it comes to environmental
                impact.
              </p>
              <p className='pb-5'>
                SEEDS is an innovative economic system and cryptocurrency that
                is championing these issues by using the Cascadia network.
              </p>
            </div>
          </div>
        </div>

        <div className='border-b border-b-secondary-100'>
          <div className='pt-16 text-center text-2xl font-semibold text-main-900'>
            Social
          </div>
          <div className='py-6 text-left text-base text-primary-500'>
            <p className='pb-5'>
              A recent analysis found that Cascadia’s energy consumption
              estimates are lower than any major competitor, even Visa! Beyond
              estimates, the community is currently auditing their energy
              consumption and CO2 generation based on detailed reports from all
              network validators.
            </p>
            <p className='pb-5'>
              This will allow users to accurately predict their energy usage and
              mitigate it through community approved carbon credit purchases and
              Cascadia-based initiatives such as SEEDS, LocalScale, and
              Corcocoin projects. All these efforts ensure Cascadia provides the
              gold standard of environmental transparency in the blockchain
              industry.
            </p>
          </div>
          <div className='flex flex-col-reverse items-start justify-between pb-5 md:flex-row md:pb-12'>
            <div className='flex w-full flex-col items-start justify-center pr-0 pt-10 text-primary-500 md:w-1/2 md:pr-5 md:pt-0'>
              <p className='pb-5'>
                Consuming less energy or even going carbon neutral isn’t enough
                when it comes to having a positive environmental impact.
                Projects must actively find ways to foster environmental
                regeneration. With all the ESG tools available to developers,
                Cascadia has attracted many projects whose sole mission is
                improving and maintaining our natural resources. This has pushed
                Cascadia far ahead of competitors when it comes to environmental
                impact.
              </p>
              <p className='pb-5'>
                SEEDS is an innovative economic system and cryptocurrency that
                is championing these issues by using the Cascadia network.
              </p>
            </div>
            <div className='pl flex w-full items-center justify-center md:w-1/2 md:pl-5'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='./images/no_image.png'
                  alt=''
                  layout='fill'
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='pt-16 text-center text-2xl font-semibold text-main-900'>
            Governance
          </div>
          <div className='py-6 text-left text-base text-primary-500'>
            <p className='pb-5'>
              A recent analysis found that Cascadia’s energy consumption
              estimates are lower than any major competitor, even Visa! Beyond
              estimates, the community is currently auditing their energy
              consumption and CO2 generation based on detailed reports from all
              network validators.
            </p>
            <p className='pb-5'>
              This will allow users to accurately predict their energy usage and
              mitigate it through community approved carbon credit purchases and
              Cascadia-based initiatives such as SEEDS, LocalScale, and
              Corcocoin projects. All these efforts ensure Cascadia provides the
              gold standard of environmental transparency in the blockchain
              industry.
            </p>
          </div>
          <div className='flex flex-col items-start justify-between pb-5 md:flex-row md:pb-12'>
            <div className='flex w-full items-center justify-center pr-0 md:w-1/2 md:pr-5'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='./images/no_image.png'
                  alt=''
                  layout='fill'
                />
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-center pl-0 pt-10 text-primary-500 md:w-1/2 md:pl-5 md:pt-0'>
              <p className='pb-5'>
                Consuming less energy or even going carbon neutral isn’t enough
                when it comes to having a positive environmental impact.
                Projects must actively find ways to foster environmental
                regeneration. With all the ESG tools available to developers,
                Cascadia has attracted many projects whose sole mission is
                improving and maintaining our natural resources. This has pushed
                Cascadia far ahead of competitors when it comes to environmental
                impact.
              </p>
              <p className='pb-5'>
                SEEDS is an innovative economic system and cryptocurrency that
                is championing these issues by using the Cascadia network.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto px-5 md:px-10 lg:px-32'>
        <div className='flex flex-col items-center justify-center py-16'>
          <div className='text-center text-3xl font-bold text-primary-900 md:text-4xl'>
            ESG on Cascadia is the Future
          </div>
          <div className='relative my-12 h-[240px] w-full p-6 md:w-[400px] md:p-0'>
            <Image
              className='absolute'
              src='./images/no_image.png'
              alt=''
              layout='fill'
            />
          </div>
          <div className='max-w-[900px] text-center text-base font-normal text-primary-500'>
            The 3 pillars that make up ESG initiatives are never going away and
            will only become more important as time passes. While the criteria
            from an investment standpoint is relatively new, the principles are
            not. Environmental impact, social responsibility and transparent
            governance offer the economic advantages and stability necessary for
            the world to thrive.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Esg;
