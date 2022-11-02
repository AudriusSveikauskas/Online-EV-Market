import { createSlice } from '@reduxjs/toolkit';

const initialEquipment = {
  equipment: [],
  reload: false,
};

const equipmentSlice = createSlice({
  name: 'equipment',
  initialState: initialEquipment,
  reducers: {
    setEquipment(state, action) {
      state.equipment = action.payload;
    },

    setReload(state, action) {
      state.reload = action.payload;
    },
  },
});

export const equipmentActions = equipmentSlice.actions;

export default equipmentSlice.reducer;
