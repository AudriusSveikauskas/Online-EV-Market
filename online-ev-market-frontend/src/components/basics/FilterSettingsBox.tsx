import React from 'react';
import { Box } from '@mui/material';

type FilterSettingsBoxProps = {
  children: React.ReactNode;
};

const FilterSettingsBox: React.FC<FilterSettingsBoxProps> = ({ children }) => (
  <Box
    sx={{
      width: { xs: '100%', md: '50%' },
      padding: { xs: 2, md: 4 },
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
  >
    {children}
  </Box>
);

export default FilterSettingsBox;
