import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  initiated: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    initiate(state) {
      state.initiated = true;
    },
  },
});

export const { initiate } = appSlice.actions;
export default appSlice.reducer;
