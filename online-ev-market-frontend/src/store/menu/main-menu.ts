import { createSlice } from '@reduxjs/toolkit';

const initialMainMenuState = {
  page: '/',
};

const mainMenuSlice = createSlice({
  name: 'mainMenu',
  initialState: initialMainMenuState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const mainMenuActions = mainMenuSlice.actions;

export default mainMenuSlice.reducer;
