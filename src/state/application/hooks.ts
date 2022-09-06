import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '@/state';
import { ApplicationModal, setOpenModal } from '@/state/application/actions';
import { useAppDispatch } from '@/state/hooks';

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useSelector(
    (state: AppState) => state.application.openModal
  );
  return openModal === modal;
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal);
  const dispatch = useAppDispatch();
  return useCallback(
    () => dispatch(setOpenModal(open ? null : modal)),
    [dispatch, modal, open]
  );
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET);
}

export function useNetworkModalToggle(): () => void {
  return useToggleModal(ApplicationModal.NETWORK);
}
