import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material/Select';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import price from '@/static-data/price';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';

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

  const priceFromAmountChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setPriceFromAmount(e.target.value));
  };

  return (
    <MultipleSelect
      id="search-price-from-field"
      name="Price"
      label={label}
      value={priceFromAmount}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={priceFromAmountChangeHandler}
      options={price}
    />
  );
};

export default PriceFromAmountFilter;
