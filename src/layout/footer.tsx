import Link from 'next/link';
import React, { useState } from 'react';

import Accordion from '@/components/accordion';
import AccordionItem from '@/components/acordionItem';

const itemList = [
  {
    title: 'RESOURCES',
    list: ['Whitepaper', 'Technology', 'FAQs', 'Academy'],
  },
  {
    title: 'DEVELOPERS',
    list: ['Documentation', 'Github', 'Office Hours', 'Grants', 'Bug Bounty'],
  },
  {
    title: 'FOUNDATION',
    list: ['About', 'Ecosystem', 'Careers', 'Contact Us'],
  },
  {
    title: 'YOUR PATH',
    list: ['Developer', 'Founder / Creator', 'Community'],
  },
  {
    title: 'SOCIAL',
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
          <div className='cursor-pointer pb-6 text-2xl uppercase text-white'>
            CASCADIA
          </div>
          <div className='capitaliz flex flex-col gap-1 text-right text-base text-secondary-100/80'>
            <a href='#' className='hover:text-white sm:text-left'>
              Block Explorer
            </a>
            <a className='hover:text-white sm:text-left'>
              <Link href='/faucet'>Cascadia Faucet</Link>
            </a>
            <a href='#' className='hover:text-white sm:text-left'>
              Cascadia Bridge
            </a>
            <a href='#' className='hover:text-white sm:text-left'>
              Sophon Chain
            </a>
            <a href='#' className='hover:text-white sm:text-left'>
              Governance
            </a>
          </div>
        </div>
        {itemList.map((item) => (
          <div
            key={item.title}
            className='col-span-2 hidden sm:block lg:col-span-1'
          >
            <div className='cursor-pointer pb-4 text-base uppercase text-white'>
              {item.title}
            </div>
            <ul className='capitaliz text-base text-secondary-100'>
              {item.list.map((li) => (
                <li
                  key={li}
                  className='py-[2px] text-base text-secondary-100/80 hover:text-white'
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
                <ul className='pl-6 text-left'>
                  {item.list.map((li) => (
                    <li
                      key={li}
                      className='py-2 text-base font-thin text-secondary-100/80 hover:text-white'
                    >
                      <a href='#'>{li}</a>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between gap-4 pt-20 pb-6 sm:flex-row sm:gap-0'>
        <div className='flex items-center  gap-6'>
          <a href='#' className='text-secondary-100 hover:text-white'>
            Privacy Policy
          </a>
          <a href='#' className='text-secondary-100 hover:text-white'>
            Terms of Use
          </a>
        </div>
        <div className='cursor-pointer text-secondary-100'>
          Cascadia Foundation
        </div>
      </div>
    </div>
  );
};

export default Footer;
