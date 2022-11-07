import { createSlice } from '@reduxjs/toolkit';

const initialSearchState = {
  basicDataExpanded: true,
  technicalDataExpanded: true,
  exteriorExpanded: true,
  interiorExpanded: true,
  equipmentExpanded: true,
  makeId: '-1',
  modelId: '-1',
  firstRegistrationFromYear: '-1',
  firstRegistrationToYear: '-1',
  priceFromAmount: '-1',
  priceUpToAmount: '-1',
  mileageFromKm: '-1',
  mileageUpToKm: '-1',
  numberOfDoors: '-1',
  bodyType: ['-1'],
  numberOfSeats: '-1',
  batteryCapacityFromKWH: '-1',
  batteryCapacityToKWH: '-1',
  powerFromHP: '-1',
  powerToHP: '-1',
  optionalEquipment: [] as string[],
  exteriorColor: [] as string[],
  interiorColor: [] as string[],
  upholstery: [] as string[],
  equipmentId: '-1',
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

    setEquipmentExpanded(state) {
      state.equipmentExpanded = !state.equipmentExpanded;
    },

    setMakeId(state, action) {
      state.makeId = action.payload;
    },

    setModelId(state, action) {
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

    setNumberOfDoors(state, action) {
      state.numberOfDoors = action.payload;
    },

    setBodyType(state, action) {
      state.bodyType = action.payload;
    },

    setNumberOfSeats(state, action) {
      state.numberOfSeats = action.payload;
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

    setOptionalEquipment(state, action) {
      const id: string = action.payload;
      const index = state.optionalEquipment.indexOf(id);

      if (index === -1) {
        state.optionalEquipment.push(id);
      } else {
        state.optionalEquipment = state.optionalEquipment.filter(
          (el) => el !== id,
        );
      }
    },

    resetAllStateArrays(state) {
      state.optionalEquipment.length = 0;
      state.exteriorColor.length = 0;
      state.interiorColor.length = 0;
      state.upholstery.length = 0;
    },

    setExteriorColor(state, action) {
      const id: string = action.payload;
      const index = state.exteriorColor.indexOf(id);

      if (index === -1) {
        state.exteriorColor.push(id);
      } else {
        state.exteriorColor = state.exteriorColor.filter((el) => el !== id);
      }
    },

    setInteriorColor(state, action) {
      const id: string = action.payload;
      const index = state.interiorColor.indexOf(id);

      if (index === -1) {
        state.interiorColor.push(id);
      } else {
        state.interiorColor = state.interiorColor.filter((el) => el !== id);
      }
    },

    setUpholstery(state, action) {
      const id: string = action.payload;
      const index = state.upholstery.indexOf(id);

      if (index === -1) {
        state.upholstery.push(id);
      } else {
        state.upholstery = state.upholstery.filter((el) => el !== id);
      }
    },

    setEquipmentId(state, action) {
      state.equipmentId = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
