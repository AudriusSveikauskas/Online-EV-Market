import React from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import CheckboxElement from '@/components/basics/CheckboxElements/CheckboxElement';
import AccordionElement from '@/components/basics/AccordionElements/AccordionElement';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';

const Equipment: React.FC = () => {
  const dispatch = useDispatch();

  const expanded = useSelector<RootState, boolean>(
    (state) => state.search.equipmentExpanded,
  );

  const exteriorChangeHandler = () => {
    dispatch(searchActions.setEquipmentExpanded());
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
  };

  const checkboxArr = [
    { id: '1', name: 'aaa' },
    { id: '2', name: 'bbb' },
    { id: '3', name: 'ccc' },
    { id: '4', name: 'ddd' },
    { id: '5', name: 'aaa' },
    { id: '6', name: 'bbb' },
    { id: '7', name: 'ccc' },
    { id: '8', name: 'ddd' },
    { id: '9', name: 'aaa' },
    { id: '10', name: 'bbb' },
    { id: '11', name: 'ccc' },
    { id: '12', name: 'ddd' },
  ];

  return (
    <AccordionElement
      id="optional-equipment"
      title="Optional Equipment"
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
          {checkboxArr.map((el) => (
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
    </AccordionElement>
  );
};

export default Equipment;
