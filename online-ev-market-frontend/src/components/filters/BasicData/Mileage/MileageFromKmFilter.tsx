import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material/Select';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import createMileageOptions from '@/helpers/create-mileage-options';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';

const MileageFromKmFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const mileageFromKm = useSelector<RootState, string>(
    (state) => state.search.mileageFromKm,
  );

  const mileageFromKmChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setMileageFromKm(e.target.value));
  };

  return (
    <MultipleSelect
      id="search-mileage-from-field"
      name="Mileage"
      label={label}
      value={mileageFromKm}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={mileageFromKmChangeHandler}
      options={createMileageOptions}
    />
  );
};

export default MileageFromKmFilter;
