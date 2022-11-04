import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import CheckboxElement from '@/components/basics/CheckboxElements/CheckboxElement';
import AccordionElement from '@/components/basics/AccordionElements/AccordionElement';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import { equipmentActions } from '@/store/api/equipment';
import get from '@/services/fetch/get';
import { Options } from '@/components/basics/TextFields/SelectTextField';

const Equipment: React.FC = () => {
  const dispatch = useDispatch();

  const setEquipment = (arr: EquipmentProps[]) => {
    dispatch(equipmentActions.setEquipment(arr));
  };

  const equipmentArr = useSelector<RootState, Options[]>(
    (state) => state.equipment.equipment,
  );

  const setOptionalEquipment = (id: string) => {
    dispatch(searchActions.setOptionalEquipment(id));
  };

  const expanded = useSelector<RootState, boolean>(
    (state) => state.search.equipmentExpanded,
  );

  const exteriorChangeHandler = () => {
    dispatch(searchActions.setEquipmentExpanded());
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.name;

    setOptionalEquipment(newValue);
  };

  const fetchData = async () => {
    const fetchedData = await get('equipment');
    setEquipment(fetchedData.data.equipment);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AccordionElement
      id="optional-equipment"
      title="Optional Equipment"
      expanded={expanded}
      onChange={exteriorChangeHandler}
    >
      <Grid container>
        {equipmentArr.map((el) => (
          <Grid
            width={{
              xs: 'calc((100% / 2) - 12px)',
              md: 'calc((100% / 3) - 12px)',
              lg: 'calc((100% / 4) - 12px)',
            }}
            key={el._id}
            sx={{
              overflow: 'hidden',
              display: 'flex',
              flexWrap: 'wrap',
              height: 60,
              ml: 1.4,
            }}
          >
            <CheckboxElement
              id={el._id}
              label={el.name}
              onChange={onChangeHandler}
            />
          </Grid>
        ))}
      </Grid>
    </AccordionElement>
  );
};

export default Equipment;
