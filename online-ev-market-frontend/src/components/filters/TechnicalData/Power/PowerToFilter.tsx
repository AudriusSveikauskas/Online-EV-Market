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

export default PowerToFilter;
