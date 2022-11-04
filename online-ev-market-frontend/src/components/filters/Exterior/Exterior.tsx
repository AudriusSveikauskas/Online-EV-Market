import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Unstable_Grid2';

import { Box, Typography } from '@mui/material';
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

  const setExteriorColor = (id: string) => {
    dispatch(searchActions.setExteriorColor(id));
  };

  const exteriorChangeHandler = () => {
    dispatch(searchActions.setExteriorExpanded());
  };

  const colorSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExteriorColor(event.target.id);
  };

  return (
    <AccordionElement
      id="exterior-data"
      title="Exterior"
      expanded={expanded}
      onChange={exteriorChangeHandler}
    >
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '1.4375em',
          letterSpacing: '0.00938em',
          color: 'rgba(0, 0, 0, 0.6)',
          mb: 2,
        }}
      >
        Body color
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
                colorSelectHandler={colorSelectHandler}
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
