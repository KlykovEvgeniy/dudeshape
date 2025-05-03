import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../../../app";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://67cdba52125cd5af75789ab9.mockapi.io"}),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], ''>({
            query: () => `/dudeshapeprod`
        }),
    }),
});

export const { useGetProductsQuery } = productApi;


