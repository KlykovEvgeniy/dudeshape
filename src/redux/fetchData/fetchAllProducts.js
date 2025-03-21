import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../services/api';

export const fetchAllProducts = createAsyncThunk('products/fetchStatus', async () => {
  return API.fetchProducts();
});
