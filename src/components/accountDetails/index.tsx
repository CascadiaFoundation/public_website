// import Image from 'next/image'
import React, { FC, useMemo } from 'react';

import { HeadlessUiModal } from '@/components/modal';

import { injected, SUPPORTED_WALLETS } from '@/config/wallets';
import { getExplorerLink } from '@/functions/explorer';
import { shortenAddress } from '@/functions/format';
import { useActiveWeb3React } from '@/services/web3';

import Copy from './copy';
import Button from '../button';

interface AccountDetailsProps {
  toggleWalletModal: () => void;
  pendingTransactions?: string[];
  confirmedTransactions?: string[];
  ENSName?: string;
  openOptions: () => void;
}

const AccountDetails: FC<AccountDetailsProps> = ({
  toggleWalletModal,
  ENSName,
}) => {
  const { chainId, account, connector, deactivate } = useActiveWeb3React();

  const connectorName = useMemo(() => {
    const { ethereum } = window;
    const isMetaMask = !!(ethereum && ethereum.isMetaMask);
    const name = Object.keys(SUPPORTED_WALLETS)
      .filter(
        (k) =>
          SUPPORTED_WALLETS[k].connector === connector &&
          (connector !== injected || isMetaMask === (k === 'METAMASK'))
      )
      .map((k) => SUPPORTED_WALLETS[k].name)[0];
    return (
      <div className='text-sm text-primary-900'>Connected with {name}</div>
    );
  }, [connector]);

  return (
    <div className='space-y-3'>
      <div className='space-y-3'>
        <HeadlessUiModal.Header
          header='Wallet Detail'
          onClose={toggleWalletModal}
        />
        <HeadlessUiModal.BorderedContent className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            {connectorName}
            <Button
              variant='outlined'
              color='red'
              size='sm'
              onClick={deactivate}
            >
              Disconnect
            </Button>
          </div>
          <div
            id='web3-account-identifier-row'
            className='flex flex-col justify-center gap-4'
          >
            <div className='flex items-center gap-4'>
              {/* <div className="overflow-hidden rounded-full">
                <Davatar
                  size={48}
                  // @ts-ignore TYPE NEEDS FIXING
                  address={account}
                  defaultComponent={
                    <Image src="/images/logo.webp" alt="Logo" width={48} height={48} />
                  }
                  provider={library}
                />
              </div> */}
              <div className='font-bold text-primary-900'>
                {account && shortenAddress(account, 10)}
              </div>
            </div>
            <div className='flex items-center justify-between gap-2 space-x-3'>
              {chainId && account && (
                <a
                  href={getExplorerLink(chainId, ENSName || account, 'address')}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='flex'>
                    <div className='font-semibold text-main-900'>
                      View on explorer
                    </div>
                  </div>
                </a>
              )}
              {account && (
                <Copy toCopy={account}>
                  <div className='text-sm text-primary-500'>Copy Address</div>
                </Copy>
              )}
            </div>
          </div>
        </HeadlessUiModal.BorderedContent>
      </div>
    </div>
  );
};

export default AccountDetails;
