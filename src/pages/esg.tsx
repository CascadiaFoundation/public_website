import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Layout from '@/layout';

type itemProps = {
  image: string;
  title: string;
  content: string;
};

const list: itemProps[] = [
  {
    image: '/images/no_image.png',
    title:
      'Engagement with companies on the physical and transition risks of climate change',
    content:
      'In Cascadia, we think that investors should interact with issuers to make sure that climate data, scenario analysis, and related disclosures are comprehensive enough to support thorough climate risk analysis in the investment process',
  },
  {
    image: '/images/no_image.png',
    title: 'Education within our Foundation',
    content:
      'In order to give our users the climate-related research they deserve, we all must continue to educate ourselves on climate change.',
  },
  {
    image: '/images/no_image.png',
    title: 'Policy that supports our efforts',
    content:
      'Users need to keep meeting with policymakers to ensure that they have the resources necessary to perform the function of finance, i.e., the effective capital allocation that aids in tackling the existential threat of climate change.',
  },
];

type animationProps = {
  [key: number]: boolean;
};

const Esg = (): JSX.Element => {
  const [animation, setAnimation] = useState<animationProps>({});
  return (
    <Layout>
      <div className='m-auto px-5 md:px-10 lg:px-32'>
        <div className='mb-10 flex flex-col items-center justify-center pt-16'>
          <InView
            as='div'
            className={clsx(
              'flex h-full w-full flex-col items-center justify-center transition-all duration-500',
              animation[100]
                ? 'translate-y-0 opacity-100'
                : 'translate-y-1/2 opacity-0'
            )}
            rootMargin='-50px'
            threshold={0}
            onChange={(inView) =>
              setAnimation((state) => ({ ...state, [100]: inView }))
            }
          >
            <div className='text-center text-2xl font-bold text-primary-900 md:text-left md:text-4xl'>
              Why does it matter?
            </div>
            <div className='my-6 max-w-[850px] text-center text-base font-normal text-primary-500'>
              Cascadia embraced the ESG framework, which has now grown into a
              comprehensive framework with important components relating to
              environmental and social impact as well as how governance
              structures may be adjusted to optimize stakeholder well-being.
            </div>
          </InView>
          <InView
            as='div'
            className='grid grid-cols-1 px-2 py-6 sm:grid-cols-3'
            rootMargin='-50px'
            threshold={0}
            onChange={(inView) =>
              setAnimation((state) => ({ ...state, [50]: inView }))
            }
          >
            <div
              className={clsx(
                'mt-10 flex flex-col items-center justify-center px-2 text-main-900 transition-all duration-500 sm:mt-0 sm:px-12',
                animation[50]
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-1/2 opacity-0'
              )}
            >
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
            <div
              className={clsx(
                'mt-10 flex flex-col items-center justify-center px-2 text-main-900 transition-all delay-300 duration-500 sm:mt-0 sm:px-12',
                animation[50] ? 'scale-100 opacity-100' : 'scale-150 opacity-0'
              )}
            >
              <div className='relative h-14 w-16'>
                <Image
                  className='absolute'
                  src='/images/social.png'
                  layout='fill'
                  alt=''
                />
              </div>
              <div className='mt-3 text-base'>Social</div>
            </div>
            <div
              className={clsx(
                'mt-10 flex flex-col items-center justify-center px-2 text-main-900 transition-all duration-500 sm:mt-0 sm:px-12',
                animation[50]
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-1/2 opacity-0'
              )}
            >
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
          </InView>
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
        {list.map((item: itemProps, index: number) => {
          const direction = index % 2 === 0;
          return (
            <InView
              as='div'
              key={index}
              className='m-auto px-5 md:px-10 lg:px-32'
              rootMargin='-50px'
              threshold={0}
              onChange={(inView) =>
                setAnimation((state) => ({ ...state, [index]: inView }))
              }
            >
              <div
                className={clsx(
                  'flex flex-col items-start justify-between pb-5 md:flex-row md:pb-20',
                  direction ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
              >
                <div
                  className={clsx(
                    'flex w-full items-center justify-center pr-0 transition-all duration-500 md:w-1/2',
                    direction ? 'md:pr-5' : 'md:pl-5',
                    animation[index] ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <div className='relative h-[300px] w-full'>
                    <Image
                      className='absolute'
                      src={item.image}
                      alt=''
                      layout='fill'
                    />
                  </div>
                </div>
                <div className='flex w-full flex-col items-start justify-center overflow-hidden pl-0 pt-16 text-primary-500 md:w-1/2 md:pl-5 md:pt-0'>
                  <div
                    className={clsx(
                      'h-full w-full transition-all delay-200 duration-500 ease-out',
                      animation[index]
                        ? 'translate-x-0 opacity-100'
                        : `${
                            direction ? '-translate-x-full' : 'translate-x-full'
                          } opacity-0`
                    )}
                  >
                    <p className='w-full pb-5 text-center text-2xl font-semibold text-primary-900 sm:text-left'>
                      {item.title}
                    </p>
                    <p className='pb-5 text-center text-base font-normal text-primary-500 sm:text-left'>
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </InView>
          );
        })}
      </div>
    </Layout>
  );
};

export default Esg;
