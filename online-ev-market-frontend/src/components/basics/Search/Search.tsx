import * as React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MakeFilter from '@/components/filters/BasicData/Make/MakeFilter';
import ModelFilter from '@/components/filters/BasicData/Model/ModelFilter';
import FirstRegistrationFromFilter from '@/components/filters/BasicData/FirstRegistration/FirstRegistrationFromFilter';
import PriceUpToAmountFilter from '@/components/filters/BasicData/Price/PriceUpToAmountFilter';
import MileageUpToKmFilter from '@/components/filters/BasicData/Mileage/MileageUpToKmFilter';
import { mainMenuActions } from '@/store/menu/main-menu';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setMenuPageState = () => {
    dispatch(mainMenuActions.setPage('/advanced-search'));
  };

  const clickHandle = () => {
    setMenuPageState();
    navigate('advanced-search');
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'primary.contrastText',
        padding: { xs: 2, md: 3 },
        borderRadius: 1,
      }}
    >
      <form>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid xs={6} md={4} sx={{ display: 'flex' }}>
            <MakeFilter label="Make" placeholder="Any" />
          </Grid>

          <Grid xs={6} md={4} sx={{ display: 'flex' }}>
            <ModelFilter label="Model" placeholder="Any" />
          </Grid>

          <Grid xs={6} md={4} sx={{ display: 'flex' }}>
            <FirstRegistrationFromFilter
              label="First registration"
              placeholder="from"
            />
          </Grid>

          <Grid xs={6} md={4} sx={{ display: 'flex' }}>
            <PriceUpToAmountFilter
              label="Price"
              placeholder="up to"
              endAdornment="€"
            />
          </Grid>

          <Grid md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MileageUpToKmFilter
              label="Mileage"
              placeholder="up to"
              endAdornment="km"
            />
          </Grid>

          <Grid xs={12} md={4} sx={{ display: 'flex' }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{ flexGrow: 1 }}
            >
              Search
            </Button>
          </Grid>

          <Grid xs={12} sx={{ display: 'flex' }}>
            <Button onClick={clickHandle} sx={{ flexGrow: 1 }}>
              Advanced Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Search;
