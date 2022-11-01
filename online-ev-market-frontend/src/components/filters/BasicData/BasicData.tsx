import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import AccordionElement from '@/components/basics/AccordionElements/AccordionElement';
import { GRID_MARGIN_BOTTOM } from '@/utils/constants/constants';
import MakeFilter from '@/components/filters/BasicData/Make/MakeFilter';
import ModelFilter from '@/components/filters/BasicData/Model/ModelFilter';
import FirstRegistrationFromFilter from './FirstRegistration/FirstRegistrationFromFilter';
import FirstRegistrationToFilter from './FirstRegistration/FirstRegistrationToFilter';
import PriceFromAmountFilter from '@/components/filters/BasicData/Price/PriceFromAmountFilter';
import PriceUpToAmountFilter from '@/components/filters/BasicData/Price/PriceUpToAmountFilter';
import MileageFromKmFilter from '@/components/filters/BasicData/Mileage/MileageFromKmFilter';
import MileageUpToKmFilter from '@/components/filters/BasicData/Mileage/MileageUpToKmFilter';
import NumberOfDoorsFilter from '@/components/filters/BasicData/NumberOfDoors/NumberOfDoorsFilter';
import BodyTypeFilter from '@/components/filters/BasicData/BodyType/BodyTypeFilter';
import NumberOfSeatsFilter from '@/components/filters/BasicData/NumberOfSeats/NumberOfSeatsFilter';

const BasicData: React.FC = () => {
  const dispatch = useDispatch();

  const expanded = useSelector<RootState, boolean>(
    (state) => state.search.basicDataExpanded,
  );

  const basicDataChangeHandler = () => {
    dispatch(searchActions.setBasicDataExpanded());
  };

  return (
    <AccordionElement
      id="basic-data"
      title="Basic Data"
      expanded={expanded}
      onChange={basicDataChangeHandler}
    >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <MakeFilter label="Make" placeholder="Any" />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <ModelFilter label="Model" placeholder="Any" />
        </Grid>

        <Grid
          xs={12}
          md={4}
          sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM, gap: 1 }}
        >
          <Box sx={{ display: 'flex', width: '50%' }}>
            <FirstRegistrationFromFilter
              label="First registration"
              placeholder="from"
            />
          </Box>

          <Box sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM, width: '50%' }}>
            <FirstRegistrationToFilter label=" " placeholder="to" />
          </Box>
        </Grid>

        <Grid
          xs={12}
          md={4}
          sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM, gap: 1 }}
        >
          <Box sx={{ display: 'flex', width: '50%' }}>
            <PriceFromAmountFilter
              label="Price"
              placeholder="from"
              endAdornment="€"
            />
          </Box>

          <Box sx={{ display: 'flex', width: '50%' }}>
            <PriceUpToAmountFilter
              label=" "
              placeholder="to"
              endAdornment="€"
            />
          </Box>
        </Grid>

        <Grid
          xs={12}
          md={4}
          sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM, gap: 1 }}
        >
          <Box sx={{ display: 'flex', width: '50%' }}>
            <MileageFromKmFilter
              label="Mileage"
              placeholder="from"
              endAdornment="km"
            />
          </Box>

          <Box sx={{ display: 'flex', width: '50%' }}>
            <MileageUpToKmFilter label=" " placeholder="to" endAdornment="km" />
          </Box>
        </Grid>

        <Grid xs={12} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <NumberOfDoorsFilter />
        </Grid>

        <Grid xs={12} md={8} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <BodyTypeFilter />
        </Grid>

        <Grid xs={12} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <NumberOfSeatsFilter />
        </Grid>
      </Grid>
    </AccordionElement>
  );
};

export default BasicData;
