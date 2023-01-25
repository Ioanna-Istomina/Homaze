import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contractsApi = createApi({
  reducerPath: 'contractsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mocki.io/v2/e084137b',
    
  }),
  tagTypes: ['Contracts'],
  endpoints: builder => ({
    getContracts: builder.query({
      query: () => `/`,
      providesTags: ['Contracts'],
    }),
  }),
});

export const {
useGetContractsQuery
} = contractsApi;
