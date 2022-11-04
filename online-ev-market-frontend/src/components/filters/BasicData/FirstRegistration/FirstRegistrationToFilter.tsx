import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material/Select';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import firstRegistration from '@/static-data/firstRegistration';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';

const FirstRegistrationToFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const firstRegistrationToYear = useSelector<RootState, string>(
    (state) => state.search.firstRegistrationToYear,
  );

  const firstRegistrationToYearChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setFirstRegistrationToYear(e.target.value));
  };

  return (
    <MultipleSelect
      id="search-first-registration-field"
      name=""
      label={label}
      value={firstRegistrationToYear}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={firstRegistrationToYearChangeHandler}
      // TODO static-data from server
      options={firstRegistration}
    />
  );
};

export default FirstRegistrationToFilter;
