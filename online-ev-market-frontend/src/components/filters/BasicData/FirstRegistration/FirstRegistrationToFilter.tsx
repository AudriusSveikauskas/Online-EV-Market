import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

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

  const firstRegistrationToYearChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setFirstRegistrationToYear(e.target.value));
  };

  return (
    <SelectTextField
      id="search-first-registration-field"
      name="firstRegistrationTo"
      label={label}
      value={firstRegistrationToYear}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={firstRegistrationToYearChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '2022', name: '2022' },
        { _id: '2021', name: '2021' },
        { _id: '2020', name: '2020' },
      ]}
    />
  );
};

export default FirstRegistrationToFilter;
