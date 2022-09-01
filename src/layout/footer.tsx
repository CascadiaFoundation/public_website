import React, { useState } from 'react';

import Accordion from '@/components/accordion';
import AccordionItem from '@/components/acordionItem';

const itemList = [
  {
    title: 'Learn',
    list: [
      'Platform',
      'Blog',
      'Technology',
      'Use Cases',
      'Education',
      'About',
      'Careers',
    ],
  },
  {
    title: 'Build',
    list: [
      'Documentation',
      'Platform',
      'Office Hours',
      'Example',
      'Bounties',
      'Security Report',
    ],
  },
  {
    title: 'Grow',
    list: ['Work with Us', 'Grants & Funding', 'Join the  Accelerator'],
  },
  {
    title: 'Belong',
    list: ['Open Web Sandbox', 'Guilds', 'DAOs', 'Events', 'Community Blog'],
  },
  {
    title: 'Choose a Path',
    list: ['Developer Path', 'Founder Path', 'Community Path'],
  },
];
const Footer = (): JSX.Element => {
  const [collapsedIndex, setCollapsedIndex] = useState<number | undefined>();
  const handleCollapse = (index: number) => {
    setCollapsedIndex((prev) => (prev === index ? undefined : index));
  };
  return (
    <div className='bg-main-900 p-[5%] pb-0'>
      <div className='grind-cols-2 grid gap-y-8 sm:grid-cols-6 lg:gap-y-0'>
        <div className='grid grid-cols-2 sm:col-span-2 sm:block lg:col-span-1'>
          <div className='cursor-pointer pb-6 text-2xl text-white'>
            Cascadia
          </div>
          <div className='capitaliz flex flex-col gap-1 text-base text-secondary-100'>
            <a
              href='#'
              className='text-right text-secondary-100/80 hover:text-white sm:text-left'
            >
              Wallet
            </a>
            <a
              href='#'
              className='text-right text-secondary-100/80 hover:text-white sm:text-left'
            >
              Explorer
            </a>
            <a
              href='#'
              className='text-right text-secondary-100/80 hover:text-white sm:text-left'
            >
              Cascadia Bridge
            </a>
            <a
              href='#'
              className='text-right text-secondary-100/80 hover:text-white sm:text-left'
            >
              Brand Toolkit
            </a>
          </div>
        </div>
        {itemList.map((item) => (
          <div
            key={item.title}
            className='col-span-2 hidden sm:block lg:col-span-1'
          >
            <div className='cursor-pointer pb-4 text-base text-white'>
              {item.title}
            </div>
            <ul className='capitaliz text-base text-secondary-100'>
              {item.list.map((li) => (
                <li
                  key={li}
                  className='py-[2px] text-base font-normal text-secondary-100/80 hover:text-white'
                >
                  <a href='#'>{li}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className='text-white sm:hidden'>
          <Accordion>
            {itemList.map((item, index) => (
              <AccordionItem
                key={item.title}
                className='cursor-pointer py-2 font-semibold text-white'
                title={item.title}
                collapse={collapsedIndex === index}
                onClick={() => handleCollapse(index)}
              >
                <ul className='pl-8 text-left text-secondary-100'>
                  {item.list.map((li) => (
                    <li key={li} className='py-2'>
                      <a href='#'>{li}</a>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between gap-4 pt-10 pb-6 sm:flex-row sm:gap-0'>
        <div className='flex items-center  gap-6'>
          <a href='#' className='text-secondary-100 hover:text-white'>
            Privacy Policy
          </a>
          <a href='#' className='text-secondary-100 hover:text-white'>
            Terms of Use
          </a>
        </div>
        <div className='cursor-pointer text-secondary-100'>
          contact@cascadia.foundation
        </div>
      </div>
    </div>
  );
};

export default Footer;
