import { createSlice } from '@reduxjs/toolkit';

const initialCars = {
  cars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialCars,
  reducers: {
    setCars(state, action) {
      state.cars = action.payload;
    },
  },
});

export const carsActions = carsSlice.actions;

export default carsSlice.reducer;
