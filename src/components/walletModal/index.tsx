import { AbstractConnector } from '@web3-react/abstract-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import Link from 'next/link';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import ReactGA from 'react-ga';

import usePrevious from '@/hooks/usePrevious';

import AccountDetails from '@/components/accountDetails';
import Button from '@/components/button';
import HeadlessUiModal from '@/components/modal/headlessUIModal';
import Typography from '@/components/typography';

import { injected, SUPPORTED_WALLETS } from '@/config/wallets';
import { useModalOpen, useWalletModalToggle } from '@/state/application/hooks';

import Option from './Option';
import PendingView from './PendingView';

enum ApplicationModal {
  WALLET,
  NETWORK,
}

enum WALLET_VIEWS {
  OPTIONS,
  ACCOUNT,
  PENDING,
}

interface WalletModal {
  pendingTransactions?: string[]; // hashes of pending
  confirmedTransactions?: string[]; // hashes of confirmed
  ENSName?: string;
}

const WalletModal: FC<WalletModal> = ({ ENSName }) => {
  const { active, account, connector, activate, error, deactivate } =
    useWeb3React();
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);
  const [pendingWallet, setPendingWallet] = useState<{
    connector?: AbstractConnector;
    id: string;
  }>();
  const [pendingError, setPendingError] = useState<boolean>();
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET);
  const toggleWalletModal = useWalletModalToggle();
  const previousAccount = usePrevious(account);
  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);

  // close on connection, when logged out before
  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) toggleWalletModal();
  }, [account, previousAccount, toggleWalletModal, walletModalOpen]);

  // always reset to account view
  useEffect(() => {
    if (walletModalOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [walletModalOpen]);

  useEffect(() => {
    if (
      walletModalOpen &&
      ((active && !activePrevious) ||
        (connector && connector !== connectorPrevious && !error))
    ) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [
    setWalletView,
    active,
    error,
    connector,
    walletModalOpen,
    activePrevious,
    connectorPrevious,
  ]);

  const handleBack = useCallback(() => {
    setPendingError(undefined);
    setWalletView(WALLET_VIEWS.ACCOUNT);
  }, []);

  const handleDeactivate = useCallback(() => {
    deactivate();
    setWalletView(WALLET_VIEWS.ACCOUNT);
  }, [deactivate]);

  const tryActivation = useCallback(
    async (
      connector:
        | (() => Promise<AbstractConnector>)
        | AbstractConnector
        | undefined,
      id: string
    ) => {
      let name = '';
      const conn =
        typeof connector === 'function' ? await connector() : connector;

      Object.keys(SUPPORTED_WALLETS).map((key) => {
        if (connector === SUPPORTED_WALLETS[key].connector) {
          return (name = SUPPORTED_WALLETS[key].name);
        }
        return true;
      });
      // log selected wallet
      ReactGA.event({
        category: 'Wallet',
        action: 'Change Wallet',
        label: name,
      });
      setPendingWallet({ connector: conn, id }); // set wallet for pending view
      setWalletView(WALLET_VIEWS.PENDING);

      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (
        conn instanceof
        WalletConnectConnector /* && conn.walletConnectProvider?.wc?.uri*/
      ) {
        conn.walletConnectProvider = undefined;
      }

      conn &&
        activate(conn, undefined, true).catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            // @ts-ignore TYPE NEEDS FIXING
            activate(conn); // a little janky...can't use setError because the connector isn't set
          } else {
            setPendingError(true);
          }
        });
    },
    [activate]
  );

  // get wallets user can switch too, depending on device/browser
  const options = useMemo(() => {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];
      // check for mobile options
      if (isMobile) {
        // disable portis on mobile for now
        if (option.name === 'Portis') {
          return null;
        }

        if (!window.web3 && !window.ethereum && option.mobile) {
          return (
            <Option
              onClick={() => tryActivation(option.connector, key)}
              id={`connect-${key}`}
              key={key}
              active={option.connector && option.connector === connector}
              link={option.href}
              header={option.name}
              subheader={null}
              icon={'/images/wallets/' + option.iconName}
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === 'MetaMask') {
            return (
              <Option
                id={`connect-${key}`}
                key={key}
                header='Install Metamask'
                subheader={null}
                link='https://metamask.io/'
                icon='/images/wallets/metamask.png'
              />
            );
          } else {
            return null; // dont want to return install twice
          }
        }
        // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
          return null;
        }
        // likewise for generic
        else if (option.name === 'Injected' && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        !isMobile &&
        !option.mobileOnly && (
          <Option
            id={`connect-${key}`}
            onClick={() => {
              option.connector === connector
                ? setWalletView(WALLET_VIEWS.ACCOUNT)
                : !option.href && tryActivation(option.connector, key);
            }}
            key={key}
            active={option.connector === connector}
            link={option.href}
            header={option.name}
            subheader={null} // use option.descriptio to bring back multi-line
            icon={'/images/wallets/' + option.iconName}
          />
        )
      );
    });
  }, [connector, tryActivation]);

  return (
    <HeadlessUiModal.Controlled
      isOpen={walletModalOpen}
      onDismiss={toggleWalletModal}
      maxWidth='md'
    >
      {error ? (
        <div className='flex flex-col gap-4'>
          <HeadlessUiModal.Header
            onClose={toggleWalletModal}
            header={
              error instanceof UnsupportedChainIdError
                ? `Wrong Network`
                : `Error connecting`
            }
          />
          <HeadlessUiModal.BorderedContent>
            <Typography variant='xs' weight={700}>
              {error instanceof UnsupportedChainIdError
                ? `Please connect to the appropriate Ethereum network.`
                : `Error connecting. Try refreshing the page.`}
            </Typography>
          </HeadlessUiModal.BorderedContent>
          <Button color='red' onClick={handleDeactivate}>
            Disconnect
          </Button>
        </div>
      ) : account && walletView === WALLET_VIEWS.ACCOUNT ? (
        <AccountDetails
          toggleWalletModal={toggleWalletModal}
          ENSName={ENSName}
          openOptions={() => setWalletView(WALLET_VIEWS.OPTIONS)}
        />
      ) : (
        <div className='flex w-full flex-col space-y-4'>
          <HeadlessUiModal.Header
            header='Select a wallet'
            onClose={toggleWalletModal}
            {...(walletView !== WALLET_VIEWS.ACCOUNT && { onBack: handleBack })}
          />
          {walletView === WALLET_VIEWS.PENDING ? (
            <PendingView
              // @ts-ignore TYPE NEEDS FIXING
              id={pendingWallet.id}
              // @ts-ignore TYPE NEEDS FIXING
              connector={pendingWallet.connector}
              error={pendingError}
              setPendingError={setPendingError}
              tryActivation={tryActivation}
            />
          ) : (
            <div className='grid grid-cols-1 gap-4 overflow-y-auto text-white md:grid-cols-2'>
              {options}
            </div>
          )}
          <div className='flex justify-center'>
            <div className='text-sm text-primary-500'>
              <Link href='https://ethereum.org/wallets/'>
                Learn more about wallets
              </Link>
            </div>
          </div>
        </div>
      )}
    </HeadlessUiModal.Controlled>
  );
};

export default WalletModal;
