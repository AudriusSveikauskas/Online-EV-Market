import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

const BatteryCapacityToFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const batteryCapacityToKWH = useSelector<RootState, string>(
    (state) => state.search.batteryCapacityToKWH,
  );

  const batteryCapacityToKWHChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setBatteryCapacityToKWH(e.target.value));
  };

  return (
    <SelectTextField
      id="search-battery-capacity-to-kwh-field"
      name="batteryCapacityTo"
      label={label}
      value={batteryCapacityToKWH}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={batteryCapacityToKWHChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '20', name: '20' },
        { _id: '30', name: '30' },
        { _id: '40', name: '40' },
        { _id: '50', name: '50' },
        { _id: '60', name: '60' },
        { _id: '70', name: '70' },
        { _id: '80', name: '80' },
        { _id: '90', name: '90' },
        { _id: '100', name: '100' },
        { _id: '200', name: '200' },
      ]}
    />
  );
};

export default BatteryCapacityToFilter;
