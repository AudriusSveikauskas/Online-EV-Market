import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

const PriceFromAmountFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const priceFromAmount = useSelector<RootState, string>(
    (state) => state.search.priceFromAmount,
  );

  const priceFromAmountChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setPriceFromAmount(e.target.value));
  };

  return (
    <SelectTextField
      id="search-price-from-field"
      name="priceFrom"
      label={label}
      value={priceFromAmount}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={priceFromAmountChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '5000', name: '5,000' },
        { _id: '7500', name: '7,500' },
        { _id: '10000', name: '10,000' },
      ]}
    />
  );
};

export default PriceFromAmountFilter;
