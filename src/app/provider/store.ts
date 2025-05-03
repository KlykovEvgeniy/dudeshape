import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../../widgets/components/furniture/model/productApi";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(productApi.middleware)

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch