import * as React from 'react';
import { Box } from '@mui/material';
import Filters from '@/components/filters/Filters';

const AdvancedSearch: React.FC = () => (
  <Box maxWidth="lg" sx={{ marginX: 'auto' }}>
    <Filters />
  </Box>
);

export default AdvancedSearch;
