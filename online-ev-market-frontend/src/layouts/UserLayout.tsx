import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import isAuthenticated from '@/services/auth/isAuthenticated';
import NavBar from '@/components/navigation/NavBar';

const UserLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated('user').then((res) => {
      if (res !== true) {
        navigate(`/sign-in?response=${JSON.stringify(res)}`);
      }
    });
  }, []);
  return (
    <Box maxWidth="lg" sx={{ marginX: 'auto' }}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default UserLayout;
