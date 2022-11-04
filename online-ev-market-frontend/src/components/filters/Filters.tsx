import * as React from 'react';

import { Box } from '@mui/material';
import BasicData from '@/components/filters/BasicData/BasicData';
import TechnicalData from '@/components/filters/TechnicalData/TechnicalData';
import Exterior from '@/components/filters/Exterior/Exterior';
import Interior from '@/components/filters/Interior/Interior';
import Equipment from '@/components/filters/Equipment/Equipment';
import SearchButton from '@/components/filters/SearchButton/SearchButton';

const Filters = () => (
  <Box sx={{ mt: 2, mb: 2, pb: 4, backgroundColor: 'primary.contrastText' }}>
    <BasicData />
    <TechnicalData />
    <Equipment />
    <Exterior />
    <Interior />
    <SearchButton />
  </Box>
);

export default Filters;
