import { RootState } from '../store';

export const selectModalIsVisible = (state: RootState) => state.modal.isVisible;
export const selectModalContent = (state: RootState) => state.modal;
