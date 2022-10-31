import { createSlice } from '@reduxjs/toolkit';

const initialModels = {
  models: [],
  reload: false,
};

const modelsSlice = createSlice({
  name: 'models',
  initialState: initialModels,
  reducers: {
    setModels(state, action) {
      state.models = action.payload;
    },

    setReload(state, action) {
      state.reload = action.payload;
    },
  },
});

export const modelsActions = modelsSlice.actions;

export default modelsSlice.reducer;
