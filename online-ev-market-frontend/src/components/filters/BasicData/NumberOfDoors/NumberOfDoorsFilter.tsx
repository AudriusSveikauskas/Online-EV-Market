import * as React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';

const NumberOfDoorsFilter: React.FC = () => {
  const [doors, setDoors] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setDoors(newAlignment);
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
        value={doors}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          flexGrow: 1,
          display: 'flex',
          height: '32px',
        }}
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
          sx={{ flexGrow: 1 }}
        >
          All
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered" sx={{ flexGrow: 1 }}>
          2/3
        </ToggleButton>
        <ToggleButton
          value="right"
          aria-label="right aligned"
          sx={{ flexGrow: 1 }}
        >
          4/5
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default NumberOfDoorsFilter;
