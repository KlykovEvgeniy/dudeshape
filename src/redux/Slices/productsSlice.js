import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../fetchData/fetchAllProducts';

const initialState = {
  entries: [],
  isLoading: false,
  errorMessage: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entries = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.errorMessage = 'Sorry, but we cant load /;';
        state.isLoading = false;
      });
  }
});

export default productsSlice.reducer
