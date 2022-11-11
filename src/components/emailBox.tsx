import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import validator from 'validator';

import Btn from '@/components/btn';

const EmailBox = (): JSX.Element => {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [checkedEmail, setCheckedEmail] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setInputEmail(email);
    if (validator.isEmail(email)) {
      setCheckedEmail(true);
      setEmailError('');
    } else {
      setCheckedEmail(false);
      setEmailError('Enter valid Email!');
    }
  }

  const handleSubmit = useCallback(() => {
    if (checkedEmail === false) {
      setOpenModal(false);

      return;
    }
    setOpenModal(true);
    fetch(`/api/addEmail/${inputEmail}`)
      .then((res) => {
        setOpenModal(true);
      }
      )
      .catch((err) => (console.log(err)))
  }, [inputEmail]);

  return (
    <div className='sm:my-18 my-12 px-6 text-center md:p-0 lg:my-24'>
      <h1 className='pb-12 text-2xl font-bold text-primary-900 sm:text-4xl'>
        Welcome to Cascadia
      </h1>
      <div className='pb-12 text-xl font-normal text-primary-500'>
        Join us. Never miss a critical announcement!
      </div>
      {/* <div className={`relative mx-auto flex h-10 w-full max-w-[600px] items-center border bg-transparent ${checkedEmail ? 'border-primary-900/50' : 'border-red-600'}`}> */}
      <div className={`relative mx-auto flex h-10 w-full max-w-[600px] items-center border bg-transparent border-primary-900/50`}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className='absolute inset-y-0 left-0 m-auto p-2 text-base text-primary-500'
        />
        <input
          className='h-full w-[65%] p-2 pl-10 focus:outline-none md:placeholder:text-primary-500 xs:w-full'
          placeholder='Receive email updates'
          onChange={handleChangeInput}
          value={inputEmail}
          type='email'
          required
        />

        <Btn
          label='Subscribe'
          className='absolute inset-y-0 right-0 border-0 bg-primary-900/50 text-secondary-200 hover:bg-primary-900/80'
          onClick={handleSubmit}
        />
      </div>
      <div>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </div>
      {/* modal */}
      {openModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-10"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    THANKS! YOU HAVE BEEN ADDED TO OUR MAILING LIST!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-highlight text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default EmailBox;
