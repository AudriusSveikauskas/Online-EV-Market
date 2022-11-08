import * as React from 'react';
import { Avatar, Box, Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import getItemLocalStorage from '@/services/localStorage/getItemLocalStorage';
import { CarProps } from '@/services/localStorage/setItemLocalStorage';
import AddToFavoriteButton from '@/components/basics/Buttons/AddToFavoriteButton';
import CarDetailsButton from '@/components/basics/Buttons/CarDetailsButton';

const Favorites = () => {
  const [carsArr, setCarsArr] = useState<CarProps[]>([]);

  useEffect(() => {
    setCarsArr(getItemLocalStorage('cars'));
  }, []);
  return (
    <Box
      maxWidth="lg"
      sx={{
        display: 'flex',
        marginX: 'auto',
        flexWrap: 'wrap',
        gap: 2,
        mt: 2,
        mb: 4,
      }}
    >
      {carsArr.length === 0 && (
        <Card sx={{ width: '100%', p: 6 }}>
          <Typography variant="h5">
            There are no saved cars in favorites
          </Typography>
        </Card>
      )}
      <Grid container spacing={2}>
        {Array.from(carsArr).map((car) => (
          <Grid
            key={car._id}
            item
            xs={12}
            md={6}
            lg={4}
            sx={{ display: 'flex', alignItems: 'stretch' }}
          >
            <Card
              sx={{
                display: 'flex',
                p: 2,
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              key={car._id}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 1, sm: 2, md: 3, lg: 4 },
                  flexGrow: 1,
                }}
              >
                <Avatar
                  variant="square"
                  alt={car._id}
                  src={car.photo}
                  sx={{ width: '100%', height: '100%' }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 2,
                  mb: 2,
                }}
              >
                <Typography variant="h5">{car.carName}</Typography>
                <Typography variant="h6">{`${car.price} €`}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <AddToFavoriteButton
                  _id={car._id}
                  carName={car.carName}
                  price={car.price}
                  photo={car.photo}
                />
                <CarDetailsButton _id={car._id} carName={car.carName} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
