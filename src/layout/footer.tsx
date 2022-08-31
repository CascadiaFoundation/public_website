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
    <div className='bg-main-900 p-[5%]'>
      <div className='grind-cols-2 my-8 grid gap-y-8 sm:my-16 sm:grid-cols-6 lg:gap-y-0'>
        <div className='grid grid-cols-2 sm:col-span-2 sm:block lg:col-span-1'>
          <div className='pb-6 text-2xl text-white'>Cascadia</div>
          <div className='capitaliz flex flex-col gap-1 text-base text-secondary-100'>
            <a
              href='#'
              className='text-grey-light text-right hover:text-white sm:text-left'
            >
              wallet
            </a>
            <a
              href='#'
              className='text-grey-light text-right hover:text-white sm:text-left'
            >
              Explorer
            </a>
            <a
              href='#'
              className='text-grey-light text-right hover:text-white sm:text-left'
            >
              Cascadia Bridge
            </a>
            <a
              href='#'
              className='text-grey-light text-right hover:text-white sm:text-left'
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
            <div className='pb-4 text-base text-white'>{item.title}</div>
            <ul className='capitaliz text-base text-secondary-100'>
              {item.list.map((li) => (
                <li key={li} className='text-grey-light hover:text-white'>
                  {li}
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
                className='py-2 font-semibold text-white'
                title={item.title}
                collapse={collapsedIndex === index}
                onClick={() => handleCollapse(index)}
              >
                <ul className='pl-8 text-left text-secondary-100'>
                  {item.list.map((li) => (
                    <li key={li} className='py-2'>
                      {li}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between pt-12 text-secondary-100 sm:flex-row'>
        <div className='flex items-center justify-center'>
          <div className='mr-7'>Privacy Policy</div>
          <div className=''>Terms of Use</div>
        </div>
        <div className='pt-5 sm:pt-0'>@ 2022 Cascadia Protocal</div>
      </div>
    </div>
  );
};

export default Footer;