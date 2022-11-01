import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

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

  const priceUpToAmountChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setPriceUpToAmount(e.target.value));
  };

  return (
    <SelectTextField
      id="search-price-up-to-field"
      name="priceUpTo"
      label={label}
      value={priceUpToAmount}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={priceUpToAmountChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '5000', name: '5,000' },
        { _id: '7500', name: '7,500' },
        { _id: '10000', name: '10,000' },
      ]}
    />
  );
};

export default PriceUpToAmountFilter;
