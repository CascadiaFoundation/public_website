import {
  faImage,
  faShieldHeart,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Layout from '@/layout';

const slide = [1, 2, 3, 4, 5];

import { Autoplay, Pagination } from 'swiper';

import SlideCard from '@/components/slideCard';

const Esg = (): JSX.Element => {
  return (
    <Layout>
      <div className='m-auto md:px-10 lg:px-32'>
        <div className='my-20 flex flex-col items-center justify-center'>
          <div className='text-4xl font-bold text-primary-900'>
            What is ESG and Why does it matter?
          </div>
          <div className='my-6 max-w-[900px] text-center text-base font-normal text-primary-500'>
            The acronym ESG stands for Environmental, Social and Governance.
            It’s a criterion which is popular in the world of business and
            investing. ESG is used to identify risks that may be missed through
            traditional forms of analysis.
          </div>
          <div className='my-6 flex items-center justify-center'>
            <div className=' flex flex-col items-center justify-center text-main-900'>
              <FontAwesomeIcon icon={faShieldHeart} className='p-4 text-5xl' />
              <div className='text-base'>Environmental</div>
            </div>
            <div className=' flex flex-col items-center justify-center px-28 text-main-900'>
              <FontAwesomeIcon icon={faUserGroup} className='p-4 text-5xl' />
              <div className='text-base'>Social</div>
            </div>
            <div className=' flex flex-col items-center justify-center text-main-900'>
              <FontAwesomeIcon icon={faImage} className='p-4 text-5xl' />
              <div className='text-base'>Governance</div>
            </div>
          </div>
        </div>

        <div className='my-20'>
          <div className='p-5 pb-8 text-center text-2xl font-semibold text-main-900'>
            Environmental
          </div>
          <div className='p-5 pb-8 text-base text-primary-500'>
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
          <div className='flex items-start justify-between'>
            <div className='flex w-full items-center justify-center p-5 md:w-1/2'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='./images/no_image.png'
                  alt=''
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-center p-5 text-primary-500 md:w-1/2'>
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

        <div className='my-20'>
          <div className='p-5 pb-8 text-center text-2xl font-semibold text-main-900'>
            Social
          </div>
          <div className='p-5 pb-8 text-base text-primary-500'>
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
          <div className='flex items-start justify-between'>
            <div className='flex w-full flex-col items-start justify-center p-5 text-primary-500 md:w-1/2'>
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
            <div className='flex w-full items-center justify-center p-5 md:w-1/2'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='./images/no_image.png'
                  alt=''
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='my-20'>
          <div className='p-5 pb-8 text-center text-2xl font-semibold text-main-900'>
            Governance
          </div>
          <div className='p-5 pb-8 text-base text-primary-500'>
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
          <div className='flex items-start justify-between'>
            <div className='flex w-full items-center justify-center p-5 md:w-1/2'>
              <div className='relative h-[300px] w-full'>
                <Image
                  className='absolute'
                  src='./images/no_image.png'
                  alt=''
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-center p-5 text-primary-500 md:w-1/2'>
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

        <div className='my-20 flex flex-col items-center justify-center'>
          <div className='text-4xl font-bold text-primary-900'>
            ESG on Cascadia is the Future
          </div>
          <div className='my-6 max-w-[900px] text-center text-base font-normal text-primary-500'>
            The 3 pillars that make up ESG initiatives are never going away and
            will only become more important as time passes. While the criteria
            from an investment standpoint is relatively new, the principles are
            not. Environmental impact, social responsibility and transparent
            governance offer the economic advantages and stability necessary for
            the world to thrive.
          </div>
          <div className='my-6 flex w-full items-center justify-center'>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              className='mySwiper'
            >
              {slide.map((item) => {
                return (
                  <SwiperSlide
                    key={item}
                    className='flex items-center justify-center'
                  >
                    <SlideCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Esg;
