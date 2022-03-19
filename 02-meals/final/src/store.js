import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './features/meals/mealsSlice';
import modalReducer from './features/modal/modalSlice';
const store = configureStore({
  reducer: {
    food: mealsReducer,
    modal: modalReducer,
  },
});

export default store;
