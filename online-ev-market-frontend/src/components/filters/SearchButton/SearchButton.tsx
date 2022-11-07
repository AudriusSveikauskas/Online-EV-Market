import React from 'react';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store';
import post from '@/services/fetch/post';
import { carsActions } from '@/store/api/cars';

const SearchButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filters = useSelector<RootState, Object>((state) => state.search);

  // @ts-ignore
  const setCarsHandler = (cars) => {
    dispatch(carsActions.setCars(cars));
  };

  async function getCars() {
    const carsArr = await post('filter-cars', filters);
    setCarsHandler(carsArr.data.cars);
  }

  const onClickHandler = async () => {
    getCars();
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
