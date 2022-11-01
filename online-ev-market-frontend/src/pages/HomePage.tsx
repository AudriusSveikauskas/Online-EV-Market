import * as React from 'react';

import { Box } from '@mui/material';
import Search from '@/components/basics/Search/Search';
import MobileSearch from '@/components/basics/Search/MobileSearch';

const HomePage: React.FC = () => (
  <Box maxWidth="lg" sx={{ marginX: 'auto' }}>
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <MobileSearch />
    </Box>

    <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: 2 }}>
      <Search />
    </Box>
  </Box>
);

export default HomePage;
