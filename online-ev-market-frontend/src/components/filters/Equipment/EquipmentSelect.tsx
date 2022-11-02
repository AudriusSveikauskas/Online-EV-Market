import React, { useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';
import { RootState } from '@/store/store';
import { Options } from '@/components/basics/TextFields/SelectTextField';
import { searchActions } from '@/store/search/search';
import get from '@/services/fetch/get';
import { equipmentActions } from '@/store/api/equipment';

const EquipmentSelect: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
}) => {
  const dispatch = useDispatch();

  const setEquipment = (arr: EquipmentProps[]) => {
    dispatch(equipmentActions.setEquipment(arr));
  };

  const setReload = (reload: boolean) => {
    dispatch(equipmentActions.setReload(reload));
  };

  const setEquipmentId = (id: string) => {
    dispatch(searchActions.setEquipmentId(id));
  };

  const equipmentId = useSelector<RootState, string>(
    (state) => state.search.equipmentId,
  );

  const equipmentArr = useSelector<RootState, Options[]>(
    (state) => state.equipment.equipment,
  );

  const equipmentReload = useSelector<RootState, boolean>(
    (state) => state.equipment.reload,
  );

  const equipmentChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setEquipmentId(e.target.value));
  };

  const fetchData = async () => {
    const fetchedData = await get('equipment');
    setEquipment(fetchedData.data.equipment);
    setReload(false);
  };

  useEffect(() => {
    setEquipmentId('-1');
    fetchData();
  }, [equipmentReload]);

  useEffect(() => {
    setReload(true);
  }, []);
  return (
    <MultipleSelect
      id="search-equipment-field"
      name="Equipment"
      label={label}
      value={equipmentId}
      placeholder={placeholder}
      onChange={equipmentChangeHandler}
      options={equipmentArr}
    />
  );
};

export default EquipmentSelect;
