import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { ModalState } from './types';

const initialModalState: ModalState = {
  isVisible: false,
  content: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal: (state, action: PayloadAction<ReactNode>) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
