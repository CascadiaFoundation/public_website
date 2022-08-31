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
    <div className='bg-main-900 px-8 pt-16 pb-6 sm:px-16 md:px-32'>
      <div className='hidden justify-items-stretch sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
        <div className='flex flex-col items-start justify-start'>
          <div className='pb-6 text-2xl text-white'>Cascadia</div>
          <ul className='capitaliz text-base text-white-100'>
            <li className='pb-2 last-of-type:pb-0'>wallet</li>
            <li className='pb-2 last-of-type:pb-0'>Explorer</li>
            <li className='pb-2 last-of-type:pb-0'>Cascadia Bridge</li>
            <li className='pb-2 last-of-type:pb-0'>Brand Toolkit</li>
          </ul>
        </div>
        {itemList.map((item) => (
          <div
            key={item.title}
            className='flex flex-col items-start justify-start'
          >
            <div className='pb-4 text-base text-white'>{item.title}</div>
            <ul className='capitaliz text-base text-white-100'>
              {item.list.map((li) => (
                <li key={li} className='pb-1 last-of-type:pb-0'>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='text-white md:hidden'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='pb-6 text-2xl text-white'>Cascadia</div>
          <ul className='capitaliz text-base text-white-100'>
            <li className='pb-2 last-of-type:pb-0'>wallet</li>
            <li className='pb-2 last-of-type:pb-0'>Explorer</li>
            <li className='pb-2 last-of-type:pb-0'>Cascadia Bridge</li>
            <li className='pb-2 last-of-type:pb-0'>Brand Toolkit</li>
          </ul>
        </div>
        <Accordion>
          {itemList.map((item, index) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              collapse={collapsedIndex === index}
              onClick={() => handleCollapse(index)}
            >
              <ul className='pl-8 text-left text-white-100'>
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

      <div className='flex flex-col items-center justify-between pt-12 text-white-100 sm:flex-row'>
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
