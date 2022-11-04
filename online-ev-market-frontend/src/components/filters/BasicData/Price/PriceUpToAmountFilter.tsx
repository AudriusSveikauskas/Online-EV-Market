import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material/Select';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';
import price from '@/static-data/price';

const PriceUpToAmountFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const priceUpToAmount = useSelector<RootState, string>(
    (state) => state.search.priceUpToAmount,
  );

  const priceUpToAmountChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setPriceUpToAmount(e.target.value));
  };

  return (
    <MultipleSelect
      id="search-price-up-to-field"
      name=""
      label={label}
      value={priceUpToAmount}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={priceUpToAmountChangeHandler}
      options={price}
    />
  );
};

export default PriceUpToAmountFilter;
