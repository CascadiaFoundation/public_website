import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
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
  };

  // const handleSubmit = useCallback(() => {
  //   if (checkedEmail === false) {
  //     setOpenModal(false);

  //     return;
  //   }
  //   setOpenModal(true);
  //   fetch(`/api/addEmail/${inputEmail}`)
  //     .then(() => {
  //       setOpenModal(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSubmit = () => {
    if (checkedEmail === false) {
      setOpenModal(false);

      return;
    }
    setOpenModal(true);
    fetch(`/api/addResponse/${inputEmail}`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" } })
      .then(() => {
        setOpenModal(true);
      })
      .catch((err) => console.log(err));
  };

  // const handleSubmit = async () => {
  //   // const requestData = {
  //   //   'entry.912683409': inputEmail,
  //   // };
  //   // const requestJson = JSON.stringify(requestData);

  //   try {
  //     const response = await fetch(`/sendEmail/${requestJson}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       }
  //     });
  //     const responseText = await response.text();
  //     console.log(responseText);
  //   } catch (ex) {
  //     console.error("POST error!");
  //   }
  // };


  return (
    <div className='sm:my-18 my-12 px-6 text-center md:p-0 lg:my-24'>
      <h1 className='pb-12 text-2xl font-bold text-primary-900 sm:text-4xl'>
        Welcome to Cascadia
      </h1>
      <div className='pb-12 text-xl font-normal text-primary-500'>
        Join us. Never miss a critical announcement!
      </div>
      {/* <div className={`relative mx-auto flex h-10 w-full max-w-[600px] items-center border bg-transparent ${checkedEmail ? 'border-primary-900/50' : 'border-red-600'}`}> */}
      <div className='relative mx-auto flex h-10 w-full max-w-[600px] items-center border border-primary-900/50 bg-transparent'>
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
        <span
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          {emailError}
        </span>
      </div>
      {/* modal */}
      {openModal ? (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-10 outline-none focus:outline-none'>
            <div className='relative my-6 mx-auto w-auto max-w-3xl'>
              {/*content*/}
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                {/*body*/}
                <div className='relative flex-auto p-6'>
                  <p className='my-4 text-lg leading-relaxed text-slate-500'>
                    You have been added to our mailing list.
                  </p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-2'>
                  <button
                    className='mr-1 mb-1 rounded bg-highlight px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600'
                    type='button'
                    onClick={() => setOpenModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
        </>
      ) : null}
    </div>
  );
};

export default EmailBox;
