import * as React from 'react';
import { Avatar, Box, Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from '@/services/fetch/get';
import CarDetailsButton from '@/components/basics/Buttons/CarDetailsButton';
import { RootState } from '@/store/store';
import { carsActions } from '@/store/api/cars';

const AdsListing = () => {
  const dispatch = useDispatch();

  const [cars] = useState<CarProps[]>([
    {
      _id: '-1',
      battery: -1,
      doors: -1,
      mileage: -1,
      modelId: '-1',
      photo1: '-1',
      power: -1,
      price: -1,
      registration: -1,
      userId: '-1',
    },
  ]);
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);

  const carsArray = useSelector<RootState, CarProps[]>(
    (state) => state.cars.cars,
  );

  const setCarsHandler = () => {
    dispatch(carsActions.setCars(cars));
  };

  const getFullName = (modelId: string) => {
    let modelName = '';
    let brandId = '';
    let brandName = '';

    models.forEach((item: ModelProps) => {
      if (item._id === modelId) {
        modelName = item.name;
        brandId = item.brandId;
      }
    });

    brands.forEach((item: { _id: string; name: string }) => {
      if (item._id === brandId) {
        brandName = item.name;
      }
    });

    return `${brandName} ${modelName}`;
  };

  useEffect(() => {
    setCarsHandler();
  }, [cars]);

  useEffect(() => {
    async function getCars() {
      const carsArr = await get('cars');
      setModels(carsArr.data.models);
      setBrands(carsArr.data.brands);
    }

    getCars();
  }, []);

  return (
    <Box
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginX: 'auto',
        gap: 2,
        mt: 2,
      }}
    >
      {Array.from(carsArray).map((car) => (
        <Card sx={{ display: 'flex', p: 4 }} key={car._id}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Avatar
              variant="square"
              alt={car._id}
              src={car.photo1}
              sx={{ height: '250px', width: '334px' }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">
                {`${getFullName(car.modelId)}`}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography>{`First registration: ${car.registration}`}</Typography>
                <Typography>{`Mileage: ${car.mileage} km`}</Typography>
                <Typography>{`Battery capacity: ${car.battery} kWh`}</Typography>
                <Typography>{`Power: ${car.power} hp`}</Typography>
              </Box>

              <Typography variant="h5">{`${car.price} €`}</Typography>
              <CarDetailsButton
                _id={car._id}
                carName={getFullName(car.modelId)}
              />
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default AdsListing;
