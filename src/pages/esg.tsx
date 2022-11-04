import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Btn from '@/components/btn';
import ESGSubHeader from '@/components/esgSubHeader';

import Layout from '@/layout';

type itemProps = {
  image: string;
  title: string;
  content: string[];
};

const list: itemProps[] = [
  {
    image: '/images/environmental-image.png',
    title: 'Environmental',
    content: [
      `The cryptocurrency industry must learn to collaborate with businesses and governments as the world continues to address these massive environmental challenges.  Revolutionary blockchain-based initiatives enhance corporate and community productivity while lower inequality and decreasing pollution.`,
    ],
  },
  {
    image: '/images/social-image.png',
    title: 'Social',
    content: [
      `Applying new technologies carries risks that need to be weighed against potential rewards.  In order to address issues regarding network scalability and processing rates, education and knowledge is crucial.  Cascadia encourages the use of an openly accessible, standardized toolbox, by providing educational resources that will support social research and development.`,
    ],
  },
  {
    image: '/images/governance-image.png',
    title: 'Governance',
    content: [
      `Cascadia's technology can be used to create collaborative networks and incentive alignment amongst ordinarily incompatible parties.  Our core protocol will enable any organization to develop decentralized applications that support both off-chain and on-chain governance.`,
    ],
  },
];

type animationProps = {
  [key: number]: boolean;
};

const Esg = (): JSX.Element => {
  const [animation, setAnimation] = useState<animationProps>({});
  return (
    <Layout>
      <ESGSubHeader />
      <div className='m-auto bg-white px-5 md:px-10 lg:px-32'>
        <div className='flex flex-col items-center justify-center pt-16'>
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
            <div className='my-6 max-w-[850px] text-center text-base font-normal leading-8 text-primary-500'>
              Embracing ESG policies is not only ethically right, it&apos;s also
              good for business. Through our cybernetic modeling, we seek to
              build a framework to understand how environmental, social impact,
              and governance structures, can be adjusted to optimize stakeholder
              well-being.
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
      {/* <div className='w-full bg-main-900 py-6 md:py-12'>
        <div className='mb-8 px-10 text-center text-2xl font-bold text-white md:text-4xl'>
          ESG - Environmental, Social, Governance
        </div>
        <div className='text-center text-lg font-semibold text-white md:text-2xl'>
          Our Key Tools on ESG accountability
        </div>
      </div> */}

      <div className='bg-white pt-24'>
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
                  'flex flex-col justify-between pb-5 md:flex-row md:pb-20',
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
                  <div className='relative h-full min-h-[300px] w-full sm:min-h-[0px]'>
                    <Image
                      className='absolute object-cover'
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
                    <p className='w-full pb-6 text-center text-2xl font-semibold text-primary-900 sm:text-left'>
                      {item.title}
                    </p>
                    <div className='pb-5 text-center text-base font-normal text-primary-500 sm:text-left'>
                      {item.content.map((p: string, index: number) => (
                        <p
                          key={index}
                          className='pb-6 leading-[28px] last:pb-0'
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </InView>
          );
        })}

        <div className='gap-x-10 p-6 text-center sm:mt-4 md:p-0'>
          <h1 className='pb-7 text-2xl font-bold text-primary-900 sm:text-4xl'>
            Join Our Community
          </h1>
          <div className='pb-8 text-xl font-normal text-primary-500'>
            Never miss a critical announcement. Be involved.
          </div>
          <div className='relative mx-auto flex h-10 w-full max-w-[600px] items-center border border-primary-900/50 bg-transparent'>
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
        </div>
      </div>
      <div className='h-24 bg-white'></div>
    </Layout>
  );
};

export default Esg;
