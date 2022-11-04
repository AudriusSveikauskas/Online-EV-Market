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

const NumberOfDoorsFilter: React.FC = () => {
  const dispatch = useDispatch();

  const [doors, setDoors] = React.useState<string | null>('-1');

  const setNumberOfDoors = (id: string) => {
    dispatch(searchActions.setNumberOfDoors(id));
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setDoors(newAlignment);
  };

  useEffect(() => {
    if (doors) setNumberOfDoors(doors);
  }, [doors]);

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
        aria-label="number of doors"
        sx={{
          flexGrow: 1,
          display: 'flex',
          height: '32px',
        }}
      >
        <ToggleButton value="-1" aria-label="all" sx={{ flexGrow: 1 }}>
          All
        </ToggleButton>
        <ToggleButton value="3" aria-label="2 or 3" sx={{ flexGrow: 1 }}>
          2/3
        </ToggleButton>
        <ToggleButton value="5" aria-label="4 or 5" sx={{ flexGrow: 1 }}>
          4/5
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default NumberOfDoorsFilter;
