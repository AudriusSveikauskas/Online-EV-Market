import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '@/store/search/search';
import mainMenuReducer from '@/store/menu/main-menu';
import brandsReducer from '@/store/api/brands';
import modelsReducer from '@/store/api/models';
import equipmentReducer from '@/store/api/equipment';
import carsReducer from '@/store/api/cars';

const store = configureStore({
  reducer: {
    search: searchReducer,
    cars: carsReducer,
    mainMenu: mainMenuReducer,
    brands: brandsReducer,
    models: modelsReducer,
    equipment: equipmentReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
