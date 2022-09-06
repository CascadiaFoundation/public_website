import React, { FC } from 'react';

import ExternalLink from '@/components/externalLink';
import Typography from '@/components/typography';

import { getExplorerLink } from '@/functions';
import { useActiveWeb3React } from '@/services/web3';

const Transaction: FC<{ hash: string }> = ({ hash }) => {
  const { chainId } = useActiveWeb3React();

  if (!chainId) return null;

  return (
    <div className='flex w-full flex-col py-1'>
      <ExternalLink
        href={getExplorerLink(chainId, hash, 'transaction')}
        className='flex items-center gap-2'
      >
        <Typography
          variant='xs'
          weight={700}
          className='flex items-center py-0.5 hover:underline'
        >
          {hash}
        </Typography>
      </ExternalLink>
    </div>
  );
};

export default Transaction;
