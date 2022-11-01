import * as React from 'react';

import { Box, Typography } from '@mui/material';
import Logo from '@/components/navigation/logo/Logo';
import MobileLogo from '@/components/navigation/logo/MobileLogo';
import MainMenu from '@/components/navigation/menu/MainMenu';
import SecondaryMenu from '@/components/navigation/menu/SecondaryMenu';
import MobileMainMenu from '@/components/navigation/menu/MobileMainMenu';

const NavBar = () => {
  console.log('NavBar');
  return (
    <Box
      sx={{
        width: '100%',
        height: 70,
        paddingX: 3,
        backgroundColor: 'primary.contrastText',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 3,
        // TODO spalvą įtraukti į konstantas
        borderBottom: '1px solid #dcdcdc',
      }}
    >
      <Box sx={{ alignSelf: 'center' }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Logo />
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <MobileLogo />
        </Box>
      </Box>

      <Box sx={{ alignSelf: 'center', flexGrow: 1 }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <MainMenu />
        </Box>
      </Box>

      <Box sx={{ alignSelf: 'center' }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <SecondaryMenu />
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Typography sx={{ marginRight: 1 }}>Menu</Typography>
          <MobileMainMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
