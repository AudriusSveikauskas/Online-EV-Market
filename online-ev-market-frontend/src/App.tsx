import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import SignUpPage from '@/pages/SignUpPage';
import SignInPage from '@/pages/SignInPage';
import AdminLayout from '@/layouts/AdminLayout';
import AdminPage from '@/pages/AdminPage';
import AdminSettings from '@/pages/AdminSettings';
import AdsListing from '@/pages/AdsListing';
import AdvancedSearch from '@/pages/AdvancedSearch';
import Favorites from '@/pages/Favorites';
import UserLayout from '@/layouts/UserLayout';
import SellCar from '@/pages/SellCar';
import CarDetails from '@/pages/CarDetails';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 700,
      lg: 1100,
      xl: 1400,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/cars" element={<AdsListing />} />
          <Route path="/car" element={<CarDetails />} />
          <Route path="/advanced-search" element={<AdvancedSearch />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/sell" element={<UserLayout />}>
          <Route index element={<SellCar />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
