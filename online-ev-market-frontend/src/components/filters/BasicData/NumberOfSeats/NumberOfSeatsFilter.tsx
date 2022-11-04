import * as React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { searchActions } from '@/store/search/search';

const NumberOfSeatsFilter = () => {
  const dispatch = useDispatch();

  const [seats, setSeats] = React.useState<string | null>('-1');

  const setNumberOfSeats = (id: string) => {
    dispatch(searchActions.setNumberOfSeats(id));
  };

  const handleSeatsChange = (
    event: React.MouseEvent<HTMLElement>,
    newSeats: string | null,
  ) => {
    setSeats(newSeats);
  };

  useEffect(() => {
    if (seats) setNumberOfSeats(seats);
  }, [seats]);

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
        Number of seats
      </Typography>
      <ToggleButtonGroup
        value={seats}
        exclusive
        onChange={handleSeatsChange}
        aria-label="Number of seats"
        sx={{
          flexGrow: 1,
          display: 'flex',
          height: '35px',
          maxHeight: '35px',
        }}
      >
        <ToggleButton value="-1" aria-label="all" sx={{ flexGrow: 1 }}>
          All
        </ToggleButton>
        <ToggleButton value="2" aria-label="2 seats" sx={{ flexGrow: 1 }}>
          2
        </ToggleButton>
        <ToggleButton value="4" aria-label="4 seats" sx={{ flexGrow: 1 }}>
          4
        </ToggleButton>
        <ToggleButton value="5" aria-label="5 seats" sx={{ flexGrow: 1 }}>
          5+
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default NumberOfSeatsFilter;
