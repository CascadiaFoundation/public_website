import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Btn from '@/components/btn';

const EmailBox = (): JSX.Element => {
  return (
    <div className='sm:my-18 my-12 px-6 text-center md:p-0 lg:my-24'>
      <h1 className='pb-12 text-2xl font-bold text-primary-900 sm:text-4xl'>
        Welcome to Cascadia
      </h1>
      <div className='pb-12 text-xl font-normal text-primary-500'>
        Join us. Never miss a critical announcement!
      </div>
      <div className='relative mx-auto flex h-10 w-full max-w-[600px] items-center border border-primary-900/50 bg-transparent'>
        <FontAwesomeIcon
          icon={faEnvelope}
          className='absolute inset-y-0 left-0 m-auto p-2 text-base text-primary-500'
        />
        <input
          className='h-full w-[65%] p-2 pl-10 focus:outline-none md:placeholder:text-primary-500 xs:w-full'
          placeholder='Receive email updates'
        />
        <Btn
          label='Subscribe'
          className='absolute inset-y-0 right-0 border-0 bg-primary-900/50 text-secondary-200 hover:bg-primary-900/80'
        />
      </div>
    </div>
  );
};

export default EmailBox;
