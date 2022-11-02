import * as React from 'react';

import { Box } from '@mui/material';
import BasicData from '@/components/filters/BasicData/BasicData';
import TechnicalData from '@/components/filters/TechnicalData/TechnicalData';
import Exterior from '@/components/filters/Exterior/Exterior';
import Interior from '@/components/filters/Interior/Interior';
import Equipment from '@/components/filters/Equipment/Equipment';

const Filters = () => (
  <Box sx={{ mt: 2, backgroundColor: 'primary.contrastText' }}>
    <BasicData />
    <TechnicalData />
    <Equipment />
    <Exterior />
    <Interior />
  </Box>
);

export default Filters;
