import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

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

  const firstRegistrationFromYearChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setFirstRegistrationFromYear(e.target.value));
  };

  return (
    <SelectTextField
      id="search-first-registration-field"
      name="firstRegistrationFrom"
      label={label}
      value={firstRegistrationFromYear}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={firstRegistrationFromYearChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '2022', name: '2022' },
        { _id: '2021', name: '2021' },
        { _id: '2020', name: '2020' },
      ]}
    />
  );
};

export default FirstRegistrationFromFilter;
