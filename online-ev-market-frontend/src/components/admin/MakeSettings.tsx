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

const MakeSettings: React.FC = () => {
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMsg, setDialogMsg] = useState({
    title: '',
    contentText: '',
    status: -1,
  });

  const brandId = useSelector<RootState, string>(
    (state) => state.search.makeId,
  );

  const setBrandId = (id: string) => {
    dispatch(searchActions.setBrandId(id));
  };

  const setReload = (reload: boolean) => {
    dispatch(brandsActions.setReload(reload));
  };

  const deleteBrandHandler = async () => {
    try {
      const res = await get('brands/delete', brandId);
      setBrandId('-1');
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
    if (brandId === '-1') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [brandId]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
      }}
    >
      <AddNewSettings
        id="brand"
        label="Make"
        endpoint="brands"
        _id={brandId}
        action={setReload}
      />
      <Divider orientation="vertical" flexItem />
      <FilterSettingsBox>
        <MakeFilter placeholder="Any" />
        <Button
          disabled={isDisabled}
          onClick={deleteBrandHandler}
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

export default MakeSettings;
