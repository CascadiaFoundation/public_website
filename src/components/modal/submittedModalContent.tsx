import Lottie from 'lottie-react';
import React, { FC, ReactElement } from 'react';

import { ModalActionProps } from '@/components/modal/action';
import { HeadlessUiModal } from '@/components/modal/index';
import Typography from '@/components/typography';

import { getExplorerLink, shortenString } from '@/functions';
import { useActiveWeb3React } from '@/services/web3';

import { ModalHeaderProps } from './header';

export interface SubmittedModalContentProps extends ModalHeaderProps {
  animationData?: any;
  txHash?: string;
  onDismiss(): void;
  onBack?(): void;
  children?: React.ReactNode;
  actions?: ReactElement<ModalActionProps> | ReactElement<ModalActionProps>[];
}

const SubmittedModalContent: FC<SubmittedModalContentProps> = ({
  header,
  children,
  subheader,
  animationData,
  txHash = '',
  onDismiss,
  onBack,
  actions,
}) => {
  const { chainId } = useActiveWeb3React();

  return (
    <HeadlessUiModal.Body>
      {animationData && (
        <div className='flex h-[102px] w-[102px] justify-center rounded-full p-6'>
          <Lottie animationData={animationData} autoplay loop={false} />
        </div>
      )}
      <HeadlessUiModal.Header
        onClose={onDismiss}
        onBack={onBack}
        header={header}
        subheader={subheader}
      />
      <HeadlessUiModal.Content>
        <div className='divide-dark-700 flex flex-col divide-y'>
          <div className='flex justify-between gap-2 py-2'>
            <Typography variant='sm' className='text-secondary'>
              Transaction Hash
            </Typography>
            {txHash && (
              <Typography variant='sm' weight={700} className='text-blue'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={getExplorerLink(chainId, txHash, 'transaction')}
                >
                  {shortenString(
                    '0x376c05d690faac163bb042b8755ea3c604776b3743f70c5ee4eda503f284ff1c',
                    12
                  )}
                </a>
              </Typography>
            )}
          </div>

          <div className='flex justify-between gap-2 py-2'>
            <Typography variant='sm' className='text-secondary'>
              Status
            </Typography>
          </div>
        </div>
        {children}
      </HeadlessUiModal.Content>
      <HeadlessUiModal.Actions>
        <HeadlessUiModal.Action main={!actions} onClick={onDismiss}>
          Close
        </HeadlessUiModal.Action>
        {actions}
      </HeadlessUiModal.Actions>
    </HeadlessUiModal.Body>
  );
};

export default SubmittedModalContent;
