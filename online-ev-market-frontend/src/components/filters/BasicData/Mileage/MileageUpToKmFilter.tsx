import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material/Select';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import createMileageOptions from '@/helpers/create-mileage-options';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';

const MileageUpToKmFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const mileageUpToKm = useSelector<RootState, string>(
    (state) => state.search.mileageUpToKm,
  );

  const mileageUpToKmChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setMileageUpToKm(e.target.value));
  };

  return (
    <MultipleSelect
      id="search-mileage-up-to-field"
      name=""
      label={label}
      value={mileageUpToKm}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={mileageUpToKmChangeHandler}
      options={createMileageOptions}
    />
  );
};

export default MileageUpToKmFilter;
