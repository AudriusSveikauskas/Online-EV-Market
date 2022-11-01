import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

const PowerFromFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const powerFromHP = useSelector<RootState, string>(
    (state) => state.search.powerFromHP,
  );

  const powerFromHPChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setPowerFromHP(e.target.value));
  };

  return (
    <SelectTextField
      id="power-from-hp-field"
      name="powerFrom"
      label={label}
      value={powerFromHP}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={powerFromHPChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '100', name: '100' },
        { _id: '200', name: '200' },
        { _id: '350', name: '350' },
      ]}
    />
  );
};

export default PowerFromFilter;
