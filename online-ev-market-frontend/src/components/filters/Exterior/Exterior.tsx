import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Unstable_Grid2';

import { Box } from '@mui/material';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import AccordionElement from '@/components/basics/AccordionElements/AccordionElement';
import exteriorColor from '@/static-data/exteriorColor';
import ColorCheckboxElement from '@/components/basics/CheckboxElements/ColorCheckboxElement';

const Exterior: React.FC = () => {
  const dispatch = useDispatch();

  const expanded = useSelector<RootState, boolean>(
    (state) => state.search.exteriorExpanded,
  );

  const exteriorChangeHandler = () => {
    dispatch(searchActions.setExteriorExpanded());
  };

  return (
    <AccordionElement
      id="exterior-data"
      title="Exterior Data"
      expanded={expanded}
      onChange={exteriorChangeHandler}
    >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {exteriorColor.map((color) => (
            <Box
              key={color.id}
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
              <ColorCheckboxElement
                id={color.id}
                name={color.name}
                label={color.label}
                backgroundColor={color.backgroundColor}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </AccordionElement>
  );
};

export default Exterior;
