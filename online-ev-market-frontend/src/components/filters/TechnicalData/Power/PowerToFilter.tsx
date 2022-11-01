import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

const PowerToFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const powerToHP = useSelector<RootState, string>(
    (state) => state.search.powerToHP,
  );

  const powerToHPChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setPowerToHP(e.target.value));
  };

  return (
    <SelectTextField
      id="power-to-hp-field"
      name="powerTo"
      label={label}
      value={powerToHP}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={powerToHPChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '100', name: '100' },
        { _id: '200', name: '200' },
        { _id: '350', name: '350' },
      ]}
    />
  );
};

export default PowerToFilter;
