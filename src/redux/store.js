import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contractsApi } from './API';
import { filter } from './reducer';

export const store = configureStore({
  reducer: {
    [contractsApi.reducerPath]: contractsApi.reducer,
    filter
  },
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat(contractsApi.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});
setupListeners(store.dispatch);
