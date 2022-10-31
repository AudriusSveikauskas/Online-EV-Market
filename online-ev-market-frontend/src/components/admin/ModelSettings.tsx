import React, { useEffect, useState } from 'react';

import { Box, Button, Divider } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MakeFilter from '@/components/filters/BasicData/MakeFilter';
import FilterSettingsBox from '@/components/basics/FilterSettingsBox';
import AddNewSettings from '@/components/admin/AddNewSettings';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import get from '@/services/fetch/get';
import AlertMsg from '@/helpers/AlertMsg';
import { brandsActions } from '@/store/api/brands';
import ModelFilter from '@/components/filters/BasicData/ModelFilter';

const ModelSettings: React.FC = () => {
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMsg, setDialogMsg] = useState({
    title: '',
    contentText: '',
    status: -1,
  });

  const modelId = useSelector<RootState, string>(
    (state) => state.search.modelId,
  );

  const makeId = useSelector<RootState, string>((state) => state.search.makeId);

  const setModelId = (id: string) => {
    dispatch(searchActions.setModelId(id));
  };

  const setReload = (reload: boolean) => {
    dispatch(brandsActions.setReload(reload));
  };

  const deleteModelHandler = async () => {
    try {
      const res = await get('models/delete', modelId);
      setModelId('-1');
      setDialogMsg({
        title: res.data.title,
        contentText: res.data.message,
        status: res.status as number,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setDialogMsg({
          title: error.response.data.title,
          contentText: error.response.data.message,
          status: error.response.status as number,
        });
      } else {
        setDialogMsg({
          title: 'Server Error:',
          contentText: `${error}. Please contact site administrator.`,
          status: 500,
        });
      }
    } finally {
      setReload(true);
    }

    setDialogOpen(true);
  };

  const dialogOnClickHandler = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (modelId === '-1') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [modelId]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
      }}
    >
      <FilterSettingsBox>
        <MakeFilter placeholder="Any" />
      </FilterSettingsBox>

      <Divider orientation="vertical" flexItem />

      <AddNewSettings
        id="model"
        label="Model"
        endpoint="models"
        _id={makeId}
        action={setReload}
      />
      <FilterSettingsBox>
        <ModelFilter placeholder="Any" />
        <Button
          disabled={isDisabled}
          onClick={deleteModelHandler}
          color="error"
          size="large"
          variant="contained"
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </FilterSettingsBox>

      <AlertMsg
        msg={dialogMsg}
        open={dialogOpen}
        onClick={dialogOnClickHandler}
      />
    </Box>
  );
};

export default ModelSettings;
