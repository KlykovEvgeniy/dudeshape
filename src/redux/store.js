import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Slices/productsSlice.js';

export const store = configureStore({
  reducer: {
    products: productsSlice
  }
});
