import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isOpen: false,
  singleMeal: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      // console.log(action);
      state.isOpen = true;
      state.singleMeal = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.singleMeal = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
