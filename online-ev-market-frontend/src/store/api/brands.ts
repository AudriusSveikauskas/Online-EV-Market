import { createSlice } from '@reduxjs/toolkit';

const initialBrands = {
  brands: [],
  reload: false,
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState: initialBrands,
  reducers: {
    setBrands(state, action) {
      state.brands = action.payload;
    },

    setReload(state, action) {
      state.reload = action.payload;
    },
  },
});

export const brandsActions = brandsSlice.actions;

export default brandsSlice.reducer;
