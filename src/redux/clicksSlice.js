import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: false },
  reducers: {
    updateClicks(state) {
      state.value = !state.value;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  whitelist: ['value'],
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { updateClicks } = clicksSlice.actions;