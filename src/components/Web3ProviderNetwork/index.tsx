import { createWeb3ReactRoot } from '@web3-react/core';
import { isMobile } from 'react-device-detect';

import { NetworkContextName } from '@/constants';

const Web3ReactRoot = createWeb3ReactRoot(NetworkContextName);

function Web3ProviderNetwork({ children, getLibrary }: any) {
  if (typeof window.ethereum === 'undefined' && !isMobile) {
    return (
      <Web3ReactRoot getLibrary={getLibrary}>
        <div className='flex w-full items-center justify-center bg-transparent'>
          <a
            className='text-main-900'
            href='https://metamask.io/download/'
            target='_blank'
            rel='noreferrer'
          >
            Please Install MetaMask.
          </a>
        </div>
        {children}
      </Web3ReactRoot>
    );
  }
  return <Web3ReactRoot getLibrary={getLibrary}>{children}</Web3ReactRoot>;
}

export default Web3ProviderNetwork;
