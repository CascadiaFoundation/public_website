import Link from 'next/link';
import React, { useState } from 'react';

import Accordion from '@/components/accordion';
import AccordionItem from '@/components/acordionItem';

const itemList = [
  {
    title: 'RESOURCES',
    list: [
      {
        name: 'Whitepaper',
        link: 'https://drive.google.com/file/d/1lnZwSqrwYKe6Pp9wOMxM76gQbfqqFTHH/view',
      },
      {
        name: 'Technology',
        link: '',
      },
    ],
  },
  {
    title: 'DEVELOPERS',
    list: [
      {
        name: 'Documentation',
        link: 'https://drive.google.com/file/d/1f8fSAYkqb1gPhgir505QT6u8H8lD1Exh/view?usp=sharing',
      },
      {
        name: 'Github',
        link: 'https://github.com/CascadiaFoundation',
      },
    ],
  },
  {
    title: 'FOUNDATION',
    list: [
      {
        name: 'Careers',
        link: '',
      },
      {
        name: 'Contact Us',
        link: 'mailto:contact@cascadia.foundation',
      },
    ],
  },
  // {
  //   title: 'YOUR PATH',
  //   list: ['Developer', 'Founder / Creator', 'Community'],
  // },
  {
    title: 'SOCIAL',
    list: [
      {
        name: 'Discord',
        link: 'https://discord.gg/cascadia',
      },
      {
        name: 'Twitter',
        link: 'https://www.twitter.com/CascadiaSystems',
      },
    ],
  },
];
const Footer = (): JSX.Element => {
  const [collapsedIndex, setCollapsedIndex] = useState<number | undefined>();
  const handleCollapse = (index: number) => {
    setCollapsedIndex((prev) => (prev === index ? undefined : index));
  };
  return (
    // <div className='bg-primary-900 p-[5%] pb-0'>
    <div className='bg-highlight px-6 pt-16 pb-0 md:px-10 lg:px-16 xl:px-32'>
      <div className='grind-cols-2 grid gap-y-8 sm:grid-cols-5 lg:gap-y-0'>
        <div className='grid grid-cols-2 sm:col-span-1 sm:block lg:col-span-1'>
          <Link href='/'>
            <div className='cursor-pointer pb-6 font-mont text-2xl font-normal text-white'>
              Cascadia
            </div>
          </Link>
          {/* <div className='capitaliz flex flex-col gap-1 text-right text-base font-normal text-secondary-100/80'>
            <div className='py-[2px] hover:text-white sm:text-left'>
              <Link href='#'>Block Explorer</Link>
            </div>
            <div className='py-[2px] hover:text-white sm:text-left'>
              <Link href='/faucet'>Cascadia Faucet</Link>
            </div>
            <div className='py-[2px] hover:text-white sm:text-left'>
              <Link href='/#'>Cascadia Bridge</Link>
            </div>
            <div className='py-[2px] hover:text-white sm:text-left'>
              <Link href='/#'>Sophon Chain</Link>
            </div>
            <div className='py-[2px] hover:text-white sm:text-left'>
              <Link href='/#'>Governance</Link>
            </div>
          </div> */}
        </div>
        {itemList.map((item) => (
          <div
            key={item.title}
            className='col-span-1 hidden sm:block lg:col-span-1'
          >
            <div className='pb-4 text-base font-semibold uppercase text-white'>
              {item.title}
            </div>
            <ul className='capitaliz text-base text-secondary-100'>
              {item.list.map((li, index) => (
                <li
                  key={index}
                  className='py-[2px] text-base font-normal text-footer-text'
                >
                  {li.link !== '' ? (
                    <div className='hover:text-white'>
                      <a
                        href={li.link ? li.link : '#'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {li.name}
                      </a>
                    </div>
                  ) : (
                    <div>
                      <span>{li.name}</span>
                    </div>
                  )}
                  {/* <a href={li.link ? li.link : '#'} target="_blank">{li.name}</a> */}
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
                  {item.list.map((li, index) => (
                    <li
                      key={index}
                      className='py-2 text-base font-thin text-secondary-100/80'
                    >
                      {li.link !== '' ? (
                        <div className='hover:text-white'>
                          <a
                            href={li.link ? li.link : '#'}
                            target='_blank'
                            rel='noreferrer'
                          >
                            {li.name}
                          </a>
                        </div>
                      ) : (
                        <div>
                          <span>{li.name}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between gap-4 pt-20 pb-6 text-base font-normal sm:flex-row sm:gap-0'>
        <div className='flex items-center gap-6 text-footer-text'>
          <Link href='/privacy' className='text-footer-text hover:text-white'>
            Privacy Policy
          </Link>
          <Link href='/terms' className='text-footer-text hover:text-white'>
            Terms of Use
          </Link>
        </div>
        {/* <div className='cursor-pointer text-secondary-100'>
          Cascadia Foundation
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
