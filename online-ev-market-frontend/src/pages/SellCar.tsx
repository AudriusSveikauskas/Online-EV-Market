import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { GRID_MARGIN_BOTTOM } from '@/utils/constants/constants';
import MakeFilter from '@/components/filters/BasicData/Make/MakeFilter';
import ModelFilter from '@/components/filters/BasicData/Model/ModelFilter';
import FirstRegistrationFromFilter from '@/components/filters/BasicData/FirstRegistration/FirstRegistrationFromFilter';
import InputField from '@/components/basics/TextFields/InputField';
import MultipleSelect from '@/components/basics/TextFields/MultipleSelect';
import Equipment from '@/components/filters/Equipment/Equipment';
import exteriorColor from '@/static-data/exteriorColor';
import { Options } from '@/components/basics/TextFields/SelectTextField';
import interiorColor from '@/static-data/interiorColor';
import upholstery from '@/static-data/upholstery';
import AddNewCarButton from '@/components/basics/Buttons/AddNewCarButton';
import { RootState } from '@/store/store';
import post from '@/services/fetch/post';
import AlertMsg from '@/helpers/AlertMsg';

const SellCar: React.FC = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(' ');
  const [mileage, setMileage] = useState(' ');
  const [battery, setBattery] = useState(' ');
  const [power, setPower] = useState(' ');
  const [seats, setSeats] = useState('-1');
  const [doors, setDoors] = useState('-1');
  const [extColor, setExtColor] = useState('-1');
  const [intColor, setIntColor] = useState('-1');
  const [intUpholstery, setIntUpholstery] = useState('-1');
  const [photo1, setPhoto1] = useState(' ');
  const [photo2, setPhoto2] = useState(' ');
  const [photo3, setPhoto3] = useState(' ');
  const [photo4, setPhoto4] = useState(' ');
  const [photo5, setPhoto5] = useState(' ');

  const modelId = useSelector<RootState, string>(
    (state) => state.search.modelId,
  );

  const firstRegistrationFromYear = useSelector<RootState, string>(
    (state) => state.search.firstRegistrationFromYear,
  );

  const optionalEquipment = useSelector<RootState>(
    (state) => state.search.optionalEquipment,
  );

  const onChangeExteriorColor = (e: SelectChangeEvent) => {
    setExtColor(e.target.value);
  };

  const onChangeInteriorColor = (e: SelectChangeEvent) => {
    setIntColor(e.target.value);
  };

  const onChangeSeats = (e: SelectChangeEvent) => {
    setSeats(e.target.value);
  };

  const onChangeDoors = (e: SelectChangeEvent) => {
    setDoors(e.target.value);
  };

  const onChangeUpholstery = (e: SelectChangeEvent) => {
    setIntUpholstery(e.target.value);
  };

  const exteriorColorOptions = [] as Options[];
  exteriorColor.forEach((color) => {
    exteriorColorOptions.push({ _id: color.id, name: color.label });
  });

  const interiorColorOptions = [] as Options[];
  interiorColor.forEach((color) => {
    interiorColorOptions.push({ _id: color.id, name: color.label });
  });

  const upholsteryOptions = [] as Options[];
  upholstery.forEach((el) => {
    upholsteryOptions.push({ _id: el.id, name: el.name });
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMsg, setDialogMsg] = useState({
    title: '',
    contentText: '',
    status: -1,
  });

  const dialogOnClickHandler = () => {
    setDialogOpen(false);
  };

  const onClickHandler = async () => {
    const car = {
      modelId,
      registration: firstRegistrationFromYear,
      equipment: optionalEquipment,
      price,
      mileage,
      doors,
      seats,
      battery,
      power,
      extColor,
      intColor,
      intUpholstery,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
    };

    try {
      const res = await post('cars', car);
      setDialogMsg({
        title: res.data.title,
        contentText: res.data.message,
        status: res.status as number,
      });
      navigate('/cars');
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
    }
    setDialogOpen(true);
  };

  return (
    <Box sx={{ mt: 2, mb: 2, p: 4, backgroundColor: 'primary.contrastText' }}>
      <Typography sx={{ mb: 4 }} variant="h5">
        SELL YOUR CAR:
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <MakeFilter label="Make" placeholder="Make" />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <ModelFilter label="Model" placeholder="Model" />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <FirstRegistrationFromFilter
            label="First registration"
            placeholder="Year"
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="price"
            label="Price"
            endAdornment="€"
            placeholder="Price"
            value={price}
            onChange={setPrice}
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="mileage"
            label="Mileage"
            endAdornment="km"
            placeholder="Mileage"
            value={mileage}
            onChange={setMileage}
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <MultipleSelect
            id="number-of-doors"
            name="Number of doors"
            endAdornment="doors"
            placeholder="Number of doors"
            value={doors}
            options={[
              { _id: '2', name: '2' },
              { _id: '3', name: '3' },
              { _id: '4', name: '4' },
              { _id: '5', name: '5' },
            ]}
            onChange={onChangeDoors}
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <MultipleSelect
            id="number-of-seats"
            name="Number of seats"
            endAdornment="seats"
            placeholder="Number of seats"
            value={seats}
            options={[
              { _id: '2', name: '2' },
              { _id: '4', name: '4' },
              { _id: '5', name: '5' },
            ]}
            onChange={onChangeSeats}
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="battery-capacity"
            label="Battery capacity"
            endAdornment="kWh"
            placeholder="Battery capacity"
            value={battery}
            onChange={setBattery}
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="power"
            label="Power"
            endAdornment="hp"
            placeholder="Power"
            value={power}
            onChange={setPower}
          />
        </Grid>

        <Grid xs={12} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <Equipment />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <MultipleSelect
            id="body-color"
            name="Body color"
            endAdornment=""
            placeholder="Body color"
            value={extColor}
            options={exteriorColorOptions}
            onChange={onChangeExteriorColor}
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <MultipleSelect
            id="interior-color"
            name="Interior color"
            endAdornment=""
            placeholder="Interior color"
            value={intColor}
            options={interiorColorOptions}
            onChange={onChangeInteriorColor}
          />
        </Grid>

        <Grid xs={6} md={4} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <MultipleSelect
            id="upholstery"
            name="Upholstery"
            endAdornment=""
            placeholder="Upholstery"
            value={intUpholstery}
            options={upholsteryOptions}
            onChange={onChangeUpholstery}
          />
        </Grid>

        <Grid xs={12} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="photo-1"
            label="Photo 1"
            endAdornment=""
            placeholder="Photo 1"
            value={photo1}
            onChange={setPhoto1}
          />
        </Grid>

        <Grid xs={12} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="photo-2"
            label="Photo 2"
            endAdornment=""
            placeholder="Photo 2"
            value={photo2}
            onChange={setPhoto2}
          />
        </Grid>

        <Grid xs={12} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="photo-3"
            label="Photo 3"
            endAdornment=""
            placeholder="Photo 3"
            value={photo3}
            onChange={setPhoto3}
          />
        </Grid>

        <Grid xs={12} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="photo-4"
            label="Photo 4"
            endAdornment=""
            placeholder="Photo 4"
            value={photo4}
            onChange={setPhoto4}
          />
        </Grid>

        <Grid xs={12} sx={{ display: 'flex', mb: GRID_MARGIN_BOTTOM }}>
          <InputField
            id="photo-5"
            label="Photo 5"
            endAdornment=""
            placeholder="Photo 5"
            value={photo5}
            onChange={setPhoto5}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <AddNewCarButton onClick={onClickHandler} />
      </Box>
      <AlertMsg
        msg={dialogMsg}
        open={dialogOpen}
        onClick={dialogOnClickHandler}
      />
    </Box>
  );
};

export default SellCar;
