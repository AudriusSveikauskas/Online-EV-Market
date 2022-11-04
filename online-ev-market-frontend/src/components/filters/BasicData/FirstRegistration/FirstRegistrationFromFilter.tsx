import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material/Select';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import firstRegistration from '@/static-data/firstRegistration';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';

const FirstRegistrationFromFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const firstRegistrationFromYear = useSelector<RootState, string>(
    (state) => state.search.firstRegistrationFromYear,
  );

  const firstRegistrationFromYearChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setFirstRegistrationFromYear(e.target.value));
  };

  return (
    <MultipleSelect
      id="search-first-registration-field"
      name="First Registration"
      label={label}
      value={firstRegistrationFromYear}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={firstRegistrationFromYearChangeHandler}
      // TODO static-data from server
      options={firstRegistration}
    />
  );
};

export default FirstRegistrationFromFilter;
