import { createReducer } from '@reduxjs/toolkit';
import { filterAction } from './actions';

export const filter = createReducer('', {
  [filterAction]: (_, { payload }) => payload,
});
