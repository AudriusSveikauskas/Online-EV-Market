import React from 'react';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store';
import post from '@/services/fetch/post';
import { carsActions } from '@/store/api/cars';
import { mainMenuActions } from '@/store/menu/main-menu';
import { searchActions } from '@/store/search/search';

const SearchButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filters = useSelector<RootState, Object>((state) => state.search);

  // @ts-ignore
  const setCarsHandler = (cars) => {
    dispatch(carsActions.setCars(cars));
  };

  const resetMenuPageState = () => {
    dispatch(mainMenuActions.setPage(''));
  };

  const resetSearchFilter = () => {
    dispatch(searchActions.setMakeId('-1'));
    dispatch(searchActions.setModelId('-1'));
    dispatch(searchActions.setFirstRegistrationFromYear('-1'));
    dispatch(searchActions.setFirstRegistrationToYear('-1'));
    dispatch(searchActions.setPriceFromAmount('-1'));
    dispatch(searchActions.setPriceUpToAmount('-1'));
    dispatch(searchActions.setMileageFromKm('-1'));
    dispatch(searchActions.setMileageUpToKm('-1'));
    dispatch(searchActions.setNumberOfDoors('-1'));
    dispatch(searchActions.setNumberOfSeats('-1'));
    dispatch(searchActions.setBatteryCapacityFromKWH('-1'));
    dispatch(searchActions.setBatteryCapacityToKWH('-1'));
    dispatch(searchActions.setPowerFromHP('-1'));
    dispatch(searchActions.setPowerToHP('-1'));
    dispatch(searchActions.resetAllStateArrays());
  };

  async function getCars() {
    const carsArr = await post('filter-cars', filters);
    setCarsHandler(carsArr.data.cars);
  }

  const onClickHandler = async () => {
    getCars();
    resetMenuPageState();
    resetSearchFilter();
    navigate('../cars');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onClick={onClickHandler}
        sx={{
          width: { xs: '80%', sm: '70%', md: '60%', lg: '50%' },
        }}
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchButton;
