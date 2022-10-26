import React from 'react';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  console.log('MainLayout');

  return (
    <Box maxWidth="lg" sx={{ marginX: 'auto' }}>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
