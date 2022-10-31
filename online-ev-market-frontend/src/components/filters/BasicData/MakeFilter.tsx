import React, { useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';
import { RootState } from '@/store/store';
import { Options } from '@/components/basics/TextFields/SelectTextField';
import { searchActions } from '@/store/search/search';
import { brandsActions } from '@/store/api/brands';
import get from '@/services/fetch/get';

const MakeFilter: React.FC<SelectTextFieldProps> = ({ label, placeholder }) => {
  const dispatch = useDispatch();

  const setBrands = (arr: BrandProps[]) => {
    dispatch(brandsActions.setBrands(arr));
  };

  const setReload = (reload: boolean) => {
    dispatch(brandsActions.setReload(reload));
  };

  const setMakeId = (id: string) => {
    dispatch(searchActions.setMakeId(id));
  };

  const makeId = useSelector<RootState, string>((state) => state.search.makeId);

  const brandsArr = useSelector<RootState, Options[]>(
    (state) => state.brands.brands,
  );

  const brandsReload = useSelector<RootState, boolean>(
    (state) => state.brands.reload,
  );

  const makeChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setMakeId(e.target.value));
  };

  const fetchData = async () => {
    const fetchedData = await get('brands');
    setBrands(fetchedData.data.brands);
    setReload(false);
  };

  useEffect(() => {
    setMakeId('-1');
    fetchData();
  }, [brandsReload]);

  useEffect(() => {
    setReload(true);
  }, []);
  return (
    <MultipleSelect
      id="search-make-field"
      name="Make"
      label={label}
      value={makeId}
      placeholder={placeholder}
      onChange={makeChangeHandler}
      options={brandsArr}
    />
  );
};

export default MakeFilter;
