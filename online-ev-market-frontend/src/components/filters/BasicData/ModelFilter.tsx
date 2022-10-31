import React, { useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';
import { RootState } from '@/store/store';
import { Options } from '@/components/basics/TextFields/SelectTextField';
import { searchActions } from '@/store/search/search';
import get from '@/services/fetch/get';
import { modelsActions } from '@/store/api/models';

const ModelFilter: React.FC<SelectTextFieldProps> = ({
  label,
  placeholder,
}) => {
  const dispatch = useDispatch();

  const setModels = (arr: BrandProps[]) => {
    dispatch(modelsActions.setModels(arr));
  };

  const setReload = (reload: boolean) => {
    dispatch(modelsActions.setReload(reload));
  };

  const setModelId = (id: string) => {
    dispatch(searchActions.setModelId(id));
  };

  const makeId = useSelector<RootState, string>((state) => state.search.makeId);
  const modelId = useSelector<RootState, string>(
    (state) => state.search.modelId,
  );

  const modelsArr = useSelector<RootState, Options[]>(
    (state) => state.models.models,
  );

  const modelsReload = useSelector<RootState, boolean>(
    (state) => state.models.reload,
  );

  const makeChangeHandler = (e: SelectChangeEvent) => {
    dispatch(searchActions.setModelId(e.target.value));
  };

  const fetchData = async () => {
    if (makeId !== '-1') {
      const fetchedData = await get('models', makeId);
      setModels(fetchedData.data.models);
    } else {
      setModels([]);
    }
    setReload(false);
  };

  useEffect(() => {
    setModelId('-1');
    fetchData();
  }, [modelsReload, makeId]);

  useEffect(() => {
    if (makeId !== '-1') {
      setReload(true);
    }
  }, []);
  return (
    <MultipleSelect
      id="search-model-field"
      name="Model"
      label={label}
      value={modelId}
      placeholder={placeholder}
      onChange={makeChangeHandler}
      options={modelsArr}
    />
  );
};

export default ModelFilter;
