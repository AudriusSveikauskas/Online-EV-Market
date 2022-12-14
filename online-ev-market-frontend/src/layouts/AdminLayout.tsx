import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import isAuthenticated from '@/services/auth/isAuthenticated';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated('admin').then((res) => {
      if (res !== true) {
        navigate(`/sign-in?response=${JSON.stringify(res)}`);
      }
    });
  }, []);
  return (
    <Box sx={{ mt: 4 }}>
      <Outlet />
    </Box>
  );
};

export default AdminLayout;
