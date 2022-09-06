import { AbstractConnector } from '@web3-react/abstract-connector';
import Lottie from 'lottie-react';
import React, { FC } from 'react';

import Button from '@/components/button';
import Dots from '@/components/dots';
import { HeadlessUiModal } from '@/components/modal';
import Typography from '@/components/typography';

import loadingCircle from '@/animation/loading-circle.json';
import { injected, SUPPORTED_WALLETS } from '@/config/wallets';

import Option from './Option';

interface PendingView {
  id: string;
  connector?: AbstractConnector;
  error?: boolean;
  setPendingError(error: boolean): void;
  tryActivation(connector: AbstractConnector, key: string): void;
}

const PendingView: FC<PendingView> = ({
  id,
  connector,
  error = false,
  setPendingError,
  tryActivation,
}) => {
  const isMetamask = window?.ethereum?.isMetaMask;

  return (
    <div className='flex flex-col gap-4'>
      <HeadlessUiModal.BorderedContent
        className={error ? 'border-red' : 'border-dark-800'}
      >
        {error ? (
          <div className='flex items-center justify-between gap-4'>
            <Typography variant='sm' weight={700} className='text-red'>
              Error while trying to connect
            </Typography>
            <Button
              variant='outlined'
              color='blue'
              size='xs'
              onClick={() => {
                setPendingError(false);
                connector && tryActivation(connector, id);
              }}
            >
              Try Again
            </Button>
          </div>
        ) : (
          <div className='flex gap-4'>
            <div className='h-5 w-5'>
              <Lottie animationData={loadingCircle} autoplay loop />
            </div>
            <Typography weight={700} className='text-high-emphesis'>
              <Dots>Initializing</Dots>
            </Typography>
          </div>
        )}
      </HeadlessUiModal.BorderedContent>
      {Object.keys(SUPPORTED_WALLETS).map((_key) => {
        const option = SUPPORTED_WALLETS[_key];
        if (id === _key) {
          if (option.connector === injected) {
            if (isMetamask && option.name !== 'MetaMask') {
              return null;
            }
            if (!isMetamask && option.name === 'MetaMask') {
              return null;
            }
          }
          return (
            <Option
              id={`connect-${_key}`}
              key={_key}
              clickable={false}
              header={option.name}
              subheader={option.description}
              icon={'/images/wallets/' + option.iconName}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default PendingView;
