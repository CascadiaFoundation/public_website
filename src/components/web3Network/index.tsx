import Image from 'next/image';
import React from 'react';

import NetworkModel from '@/components/networkModal';

import { NETWORK_ICON } from '@/config/networks';
import { NATIVE } from '@/config/symbols';
import { useActiveWeb3React } from '@/services/web3';
import { useNetworkModalToggle } from '@/state/application/hooks';

import Tooltip from '../tooltip';

function Web3Network(): JSX.Element | null {
  const { chainId, account } = useActiveWeb3React();

  const toggleNetworkModal = useNetworkModalToggle();

  if (!chainId) return null;

  return (
    <div
      className='pointer-events-auto flex cursor-pointer select-none items-center whitespace-nowrap text-sm font-bold'
      onClick={() => toggleNetworkModal()}
    >
      {account && chainId && (
        <>
          {/*@ts-ignore TYPE NEEDS FIXING*/}
          <Tooltip tooltipText={NATIVE[chainId || 1].symbol}>
            <div className='pointer-events-auto grid h-[40px] w-[40px] auto-cols-max grid-flow-col items-center justify-center text-sm text-white'>
              {/*@ts-ignore TYPE NEEDS FIXING*/}
              <Image
                className='border-white transition-all hover:border'
                src={NETWORK_ICON[chainId]}
                alt='Switch Network'
                width='40px'
                height='40px'
              />
            </div>
          </Tooltip>
        </>
      )}
      <NetworkModel />
    </div>
  );
}

export default Web3Network;
