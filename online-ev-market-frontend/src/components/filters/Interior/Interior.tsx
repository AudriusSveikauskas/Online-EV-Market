import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Unstable_Grid2';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import AccordionElement from '@/components/basics/AccordionElements/AccordionElement';

const Interior: React.FC = () => {
  const dispatch = useDispatch();

  const expanded = useSelector<RootState, boolean>(
    (state) => state.search.interiorExpanded,
  );

  const interiorChangeHandler = () => {
    dispatch(searchActions.setInteriorExpanded());
  };

  return (
    <AccordionElement
      id="interior-data"
      title="Interior Data"
      expanded={expanded}
      onChange={interiorChangeHandler}
    >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid xs={6} md={4} sx={{ display: 'flex' }}>
          -=Interior=-
        </Grid>
      </Grid>
    </AccordionElement>
  );
};

export default Interior;
