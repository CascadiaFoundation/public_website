import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import React from 'react';
import { Activity } from 'react-feather';

import { useWalletModalToggle } from '@/state/application/hooks';

import { ButtonProps } from '../button';

export default function Web3Connect({ loading }: ButtonProps) {
  const toggleWalletModal = useWalletModalToggle();
  const { error } = useWeb3React();

  if (loading) console.log(loading);

  return error ? (
    <div
      className='flex cursor-pointer items-center bg-primary-900 px-3 py-2 text-secondary-100 transition-all hover:bg-primary-900/60'
      onClick={toggleWalletModal}
    >
      <div className='mr-1'>
        <Activity className='h-4 w-4' />
      </div>
      {error instanceof UnsupportedChainIdError
        ? `You are on the wrong network`
        : `Error`}
    </div>
  ) : (
    <button
      onClick={toggleWalletModal}
      className='flex cursor-pointer items-center bg-primary-900 px-3 py-2 text-secondary-100 transition-all hover:bg-primary-900/60'
    >
      <FontAwesomeIcon icon={faWallet} className='mr-3 text-xl' />
      <span>Connect Wallet</span>
    </button>
  );
}
