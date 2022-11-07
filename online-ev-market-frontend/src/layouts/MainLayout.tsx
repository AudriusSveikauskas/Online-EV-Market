import React from 'react';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/navigation/NavBar';

const MainLayout: React.FC = () => (
  <Box maxWidth="lg" sx={{ marginX: 'auto' }}>
    <NavBar />
    <Outlet />
  </Box>
);

export default MainLayout;
