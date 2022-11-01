import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';
import { searchActions } from '@/store/search/search';
import createMileageOptions from '@/helpers/create-mileage-options';

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

  const mileageUpToKmChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setMileageUpToKm(e.target.value));
  };

  return (
    <SelectTextField
      id="search-mileage-up-to-field"
      name="mileageUpTo"
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
