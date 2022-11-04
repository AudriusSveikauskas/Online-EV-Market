import * as React from 'react';

import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import bodyType from '@/static-data/bodyType';
import AutocompleteLimitTags, {
  BodyProps,
} from '@/components/basics/TextFields/AutocompleteLimitTags';
import { searchActions } from '@/store/search/search';

const BodyTypeFilter: React.FC = () => {
  const dispatch = useDispatch();

  const setNumberOfSeats = (arr: string[]) => {
    dispatch(searchActions.setBodyType(arr));
  };

  const onChangeHandler = (
    event: SyntheticEvent<Element, Event>,
    value: BodyProps[],
  ) => {
    const arr: Array<string> = [];

    value.forEach((el) => {
      arr.push(el.id);
    });

    setNumberOfSeats(arr);
  };

  return (
    <AutocompleteLimitTags
      id="body-type"
      label="Body type"
      options={bodyType}
      placeholder=""
      onChange={onChangeHandler}
    />
  );
};

export default BodyTypeFilter;
