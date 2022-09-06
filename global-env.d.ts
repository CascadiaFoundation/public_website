import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

declare global {
  interface String {
    toBigNumber(decimals: number): BigNumber;
  }
  interface Window {
    walletLinkExtension?: any;
    ethereum?: {
      isCoinbaseWallet?: true;
      isMetaMask?: true;
      on?: (...args: any[]) => void;
      removeListener?: (...args: any[]) => void;
      removeAllListeners?: (...args: any[]) => void;
      autoRefreshOnNetworkChange?: boolean;
    };
    web3?: Record<string, unknown>;
  }
}
