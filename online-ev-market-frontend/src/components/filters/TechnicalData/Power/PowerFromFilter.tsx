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
        { _id: '50', name: '50' },
        { _id: '70', name: '70' },
        { _id: '100', name: '100' },
        { _id: '150', name: '150' },
        { _id: '200', name: '200' },
        { _id: '300', name: '300' },
        { _id: '400', name: '400' },
        { _id: '500', name: '500' },
        { _id: '1000', name: '1000' },
      ]}
    />
  );
};

export default PowerFromFilter;
