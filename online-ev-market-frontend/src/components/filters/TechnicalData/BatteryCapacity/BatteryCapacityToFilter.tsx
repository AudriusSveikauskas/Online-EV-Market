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
        { _id: '10', name: '10' },
        { _id: '20', name: '20' },
        { _id: '120', name: '120' },
      ]}
    />
  );
};

export default BatteryCapacityToFilter;
