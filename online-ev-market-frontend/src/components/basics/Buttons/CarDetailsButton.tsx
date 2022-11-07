import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

type CarDetailsButtonProps = {
  _id: string;
  carName: string;
};

const CarDetailsButton: React.FC<CarDetailsButtonProps> = ({
  _id,
  carName,
}) => {
  const navigate = useNavigate();

  const onclickHandle = () => {
    navigate(`/car?_id=${_id}&name=${carName}`);
  };

  return (
    <Button
      onClick={onclickHandle}
      variant="contained"
      startIcon={<DirectionsCarIcon />}
    >
      Co to car details
    </Button>
  );
};
export default CarDetailsButton;
