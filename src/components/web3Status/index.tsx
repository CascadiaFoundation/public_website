import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWeb3React } from '@web3-react/core';
import React from 'react';

import WalletModal from '@/components/walletModal';
import Web3Connect from '@/components/web3Connect';

import { NetworkContextName } from '@/constants';
import { useWalletModalToggle } from '@/state/application/hooks';

function Web3StatusInner() {
  const { account } = useWeb3React();

  const toggleWalletModal = useWalletModalToggle();

  if (account) {
    return (
      <button
        onClick={toggleWalletModal}
        disabled
        className='flex items-center bg-primary-500 px-3 py-2 text-secondary-100 transition-all'
      >
        <FontAwesomeIcon icon={faWallet} className='mr-3 text-xl' />
        <span>Wallet Connected</span>
      </button>
    );
  } else {
    return <Web3Connect />;
  }
}

export default function Web3Status() {
  const { active, account } = useWeb3React();
  const contextNetwork = useWeb3React(NetworkContextName);

  if (!contextNetwork.active && !active) {
    return null;
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal ENSName={account ?? undefined} />
    </>
  );
}