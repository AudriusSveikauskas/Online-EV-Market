import * as React from 'react';
import { Box } from '@mui/material';
// import Filters from '@filters/Filters';

const AdsListing = () => {
  console.log('AdsListing');

  return (
    <Box
      maxWidth="lg"
      sx={{
        display: 'flex',
        marginX: 'auto',
        gap: 2,
        mt: 2,
      }}
    >
      <Box
        sx={{
          width: '300px',
          paddingX: 2,
          paddingBottom: 2,
        }}
      >
        {/* <Filters /> */}
        sidebar
      </Box>
      <Box sx={{ flexGrow: 1 }}>main</Box>
    </Box>
  );
};

export default AdsListing;
