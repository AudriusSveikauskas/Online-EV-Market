import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';
import createMileageOptions from '@/helpers/create-mileage-options';

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

  const mileageFromKmChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setMileageFromKm(e.target.value));
  };

  return (
    <SelectTextField
      id="search-mileage-from-field"
      name="mileageFrom"
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
