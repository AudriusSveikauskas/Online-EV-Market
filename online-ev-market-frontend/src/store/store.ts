import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '@/store/search/search';
import mainMenuReducer from '@/store/menu/main-menu';
import brandsReducer from '@/store/api/brands';
import modelsReducer from '@/store/api/models';

const store = configureStore({
  reducer: {
    search: searchReducer,
    mainMenu: mainMenuReducer,
    brands: brandsReducer,
    models: modelsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
