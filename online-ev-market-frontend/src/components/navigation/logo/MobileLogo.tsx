import * as React from 'react';

import { Box, Typography } from '@mui/material';

const MobileLogo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img src="/images/mobile-logo.png" alt="Online EV Market" />
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
        alignItems: 'center',
        marginLeft: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: 0.4,
        }}
      >
        Biggest
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          fontStyle: 'italic',
          color: 'primary.main',
          fontWeight: 700,
          marginX: 0.6,
          marginTop: 0.4,
        }}
      >
        EV
      </Typography>
      <Typography sx={{ fontSize: 12, fontStyle: 'italic', marginTop: 0.4 }}>
        marketplace
      </Typography>
    </Box>
  </Box>
);

export default MobileLogo;
