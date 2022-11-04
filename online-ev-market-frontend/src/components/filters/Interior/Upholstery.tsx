import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import upholstery from '@/static-data/upholstery';
import CheckboxElement from '@/components/basics/CheckboxElements/CheckboxElement';
import { searchActions } from '@/store/search/search';

const Upholstery: React.FC = () => {
  const dispatch = useDispatch();

  const setUpholstery = (id: string) => {
    dispatch(searchActions.setUpholstery(id));
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.name;

    setUpholstery(newValue);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '1.4375em',
          letterSpacing: '0.00938em',
          color: 'rgba(0, 0, 0, 0.6)',
          mb: 1,
        }}
      >
        Upholstery
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {upholstery.map((el) => (
            <Box
              key={el.id}
              sx={{
                minWidth: {
                  xs: 'calc((100% - 23px) / 2)',
                  sm: 'calc((100% - 34px) / 3)',
                  md: 'calc((100% - 56px) / 5)',
                  lg: 'calc((100% - 79px) / 7)',
                },
                height: 60,
                ml: 1.4,
              }}
            >
              <CheckboxElement
                id={el.id}
                label={el.name}
                onChange={onChangeHandler}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Upholstery;
