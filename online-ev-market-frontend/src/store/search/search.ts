import { createSlice } from '@reduxjs/toolkit';

const initialSearchState = {
  basicDataExpanded: true,
  technicalDataExpanded: true,
  exteriorExpanded: true,
  interiorExpanded: true,
  makeId: '-1',
  modelId: '-1',
  firstRegistrationFromYear: '-1',
  firstRegistrationToYear: '-1',
  priceFromAmount: '-1',
  priceUpToAmount: '-1',
  mileageFromKm: '-1',
  mileageUpToKm: '-1',
  batteryCapacityFromKWH: '-1',
  batteryCapacityToKWH: '-1',
  powerFromHP: '-1',
  powerToHP: '-1',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setBasicDataExpanded(state) {
      state.basicDataExpanded = !state.basicDataExpanded;
    },

    setTechnicalDataExpanded(state) {
      state.technicalDataExpanded = !state.technicalDataExpanded;
    },

    setExteriorExpanded(state) {
      state.exteriorExpanded = !state.exteriorExpanded;
    },

    setInteriorExpanded(state) {
      state.interiorExpanded = !state.interiorExpanded;
    },

    setMakeId(state, action) {
      state.makeId = action.payload;
    },

    setBrandId(state, action) {
      state.modelId = action.payload;
    },

    setFirstRegistrationFromYear(state, action) {
      state.firstRegistrationFromYear = action.payload;
    },

    setFirstRegistrationToYear(state, action) {
      state.firstRegistrationToYear = action.payload;
    },

    setPriceFromAmount(state, action) {
      state.priceFromAmount = action.payload;
    },

    setPriceUpToAmount(state, action) {
      state.priceUpToAmount = action.payload;
    },

    setMileageFromKm(state, action) {
      state.mileageFromKm = action.payload;
    },

    setMileageUpToKm(state, action) {
      state.mileageUpToKm = action.payload;
    },

    setBatteryCapacityFromKWH(state, action) {
      state.batteryCapacityFromKWH = action.payload;
    },

    setBatteryCapacityToKWH(state, action) {
      state.batteryCapacityToKWH = action.payload;
    },

    setPowerFromHP(state, action) {
      state.powerFromHP = action.payload;
    },

    setPowerToHP(state, action) {
      state.powerToHP = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
