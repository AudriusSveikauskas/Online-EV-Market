import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Button, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RootState } from '@/store/store';
import { searchActions } from '@/store/search/search';
import { equipmentActions } from '@/store/api/equipment';
import get from '@/services/fetch/get';
import AddNewSettings from '@/components/admin/AddNewSettings';
import FilterSettingsBox from '@/components/basics/FilterSettingsBox';
import AlertMsg from '@/helpers/AlertMsg';
import EquipmentSelect from '@/components/filters/Equipment/EquipmentSelect';

const EquipmentSettings: React.FC = () => {
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMsg, setDialogMsg] = useState({
    title: '',
    contentText: '',
    status: -1,
  });

  const equipmentId = useSelector<RootState, string>(
    (state) => state.search.equipmentId,
  );

  const setEquipmentId = (id: string) => {
    dispatch(searchActions.setEquipmentId(id));
  };

  const setReload = (reload: boolean) => {
    dispatch(equipmentActions.setReload(reload));
  };

  const deleteEquipmentHandler = async () => {
    try {
      const res = await get('equipment/delete', equipmentId);
      setEquipmentId('-1');
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
    if (equipmentId === '-1') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [equipmentId]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
      }}
    >
      <AddNewSettings
        id="equipment"
        label="Equipment"
        endpoint="equipment"
        action={setReload}
      />
      <Divider orientation="vertical" flexItem />
      <FilterSettingsBox>
        <EquipmentSelect placeholder="Any" />
        <Button
          disabled={isDisabled}
          onClick={deleteEquipmentHandler}
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

export default EquipmentSettings;
