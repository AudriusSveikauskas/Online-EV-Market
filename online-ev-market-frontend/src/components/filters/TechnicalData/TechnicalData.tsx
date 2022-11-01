import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import AccordionElement from '@/components/basics/AccordionElements/AccordionElement';
import { GRID_MARGIN_BOTTOM } from '@/utils/constants/constants';
import BatteryCapacityFromFilter from './BatteryCapacity/BatteryCapacityFromFilter';
import BatteryCapacityToFilter from '@/components/filters/TechnicalData/BatteryCapacity/BatteryCapacityToFilter';
import SwitchElement from '@/components/basics/SwitchElements/SwitchElement';
import PowerFromFilter from '@/components/filters/TechnicalData/Power/PowerFromFilter';
import PowerToFilter from '@/components/filters/TechnicalData/Power/PowerToFilter';

const TechnicalData: React.FC = () => {
  const dispatch = useDispatch();

  const expanded = useSelector<RootState, boolean>(
    (state) => state.search.technicalDataExpanded,
  );

  const technicalDataChangeHandler = () => {
    dispatch(searchActions.setTechnicalDataExpanded());
  };

  return (
    <AccordionElement
      id="technical-data"
      title="Technical Data"
      expanded={expanded}
      onChange={technicalDataChangeHandler}
    >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid
          xs={12}
          md={6}
          sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM, gap: 1 }}
        >
          <Box sx={{ display: 'flex', width: '34%' }}>
            <BatteryCapacityFromFilter
              label="Battery capacity"
              placeholder="from"
              endAdornment="kWh"
            />
          </Box>

          <Box sx={{ display: 'flex', width: '34%' }}>
            <BatteryCapacityToFilter
              label=" "
              placeholder="to"
              endAdornment="kWh"
            />
          </Box>

          <Box sx={{ display: 'flex', width: '32%' }}>
            <SwitchElement
              labelOn="yes"
              labelOff="no"
              labelPlacement="end"
              defaultChecked
            />
          </Box>
        </Grid>

        <Grid
          xs={12}
          md={6}
          sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM, gap: 1 }}
        >
          <Box sx={{ display: 'flex', width: '34%' }}>
            <PowerFromFilter
              label="Power"
              placeholder="from"
              endAdornment="hp"
            />
          </Box>

          <Box sx={{ display: 'flex', width: '34%' }}>
            <PowerToFilter label=" " placeholder="to" endAdornment="hp" />
          </Box>

          <Box sx={{ display: 'flex', width: '32%' }}>
            {/* <SwitchElement defaultChecked /> */}
            hp - kw
          </Box>
        </Grid>
      </Grid>
    </AccordionElement>
  );
};

export default TechnicalData;
