import { configureStore } from '@reduxjs/toolkit';
import appReducer, { initiate } from './slices/app';

const store = configureStore({
  devTools: {
    name: 'Łukasz Rej - Blog',
  },
  reducer: {
    app: appReducer,
  },
});

store.dispatch(initiate());

export default store;
