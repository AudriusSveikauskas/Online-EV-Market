import * as React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';

const NumberOfSeatsFilter = () => {
  const [seats, setSeats] = React.useState<string | null>('-1');

  const handleSeatsChange = (
    event: React.MouseEvent<HTMLElement>,
    newSeatsBumber: string | null,
  ) => {
    setSeats(newSeatsBumber);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{ fontSize: '.75rem', color: 'rgba(0, 0, 0, 0.6)', mt: '-2px' }}
      >
        Number of doors
      </Typography>
      <ToggleButtonGroup
        value={seats}
        exclusive
        onChange={handleSeatsChange}
        aria-label="text alignment"
        sx={{
          flexGrow: 1,
          display: 'flex',
          height: '32px',
        }}
      >
        <ToggleButton value="-1" aria-label="left aligned" sx={{ flexGrow: 1 }}>
          All
        </ToggleButton>
        <ToggleButton value="2" aria-label="left aligned" sx={{ flexGrow: 1 }}>
          2
        </ToggleButton>
        <ToggleButton value="3" aria-label="centered" sx={{ flexGrow: 1 }}>
          3/4
        </ToggleButton>
        <ToggleButton value="5" aria-label="right aligned" sx={{ flexGrow: 1 }}>
          5+
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default NumberOfSeatsFilter;
