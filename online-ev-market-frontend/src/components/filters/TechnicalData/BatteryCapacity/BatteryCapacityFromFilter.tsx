import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import SelectTextField from '@/components/basics/TextFields/SelectTextField';

const BatteryCapacityFromFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const dispatch = useDispatch();

  const batteryCapacityFromKWH = useSelector<RootState, string>(
    (state) => state.search.batteryCapacityFromKWH,
  );

  const batteryCapacityFromKWHChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchActions.setBatteryCapacityFromKWH(e.target.value));
  };

  return (
    <SelectTextField
      id="search-battery-capacity-from-kwh-field"
      name="batteryCapacityFrom"
      label={label}
      value={batteryCapacityFromKWH}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      onChange={batteryCapacityFromKWHChangeHandler}
      // TODO static-data from server
      options={[
        { _id: '10', name: '10' },
        { _id: '20', name: '20' },
        { _id: '120', name: '120' },
      ]}
    />
  );
};

export default BatteryCapacityFromFilter;
