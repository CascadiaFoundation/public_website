import { createAction } from '@reduxjs/toolkit';

export type PopupContent =
  | {
      txn: {
        hash: string;
        success: boolean;
        summary?: string;
      };
    }
  | {
      listUpdate: {
        listUrl: string;
        auto: boolean;
      };
    };

export enum ApplicationModal {
  WALLET,
  NETWORK,
}

export const updateBlockNumber = createAction<{
  chainId: number;
  blockNumber: number;
}>('application/updateBlockNumber');
export const updateChainId = createAction<{ chainId: number }>(
  'application/updateChainId'
);
export const setChainConnectivityWarning = createAction<{
  chainConnectivityWarning: boolean;
}>('application/setChainConnectivityWarning');
export const setOpenModal = createAction<ApplicationModal | null>(
  'application/setOpenModal'
);
export const addPopup = createAction<{
  key?: string;
  removeAfterMs?: number | null;
  content: PopupContent;
}>('application/addPopup');
export const removePopup = createAction<{ key: string }>(
  'application/removePopup'
);
