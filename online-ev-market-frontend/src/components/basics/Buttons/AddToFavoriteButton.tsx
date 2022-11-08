import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import setItemLocalStorage from '@/services/localStorage/setItemLocalStorage';
import getItemLocalStorage from '@/services/localStorage/getItemLocalStorage';

type AddToFavoriteButtonProps = {
  _id: string;
  carName: string;
  price: number;
  photo: string;
};

const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = ({
  _id,
  carName,
  price,
  photo,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickHandle = () => {
    const car = { _id, carName, price, photo };
    setItemLocalStorage('cars', car);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(getItemLocalStorage('cars', _id));
  }, []);
  return (
    <Button
      onClick={onClickHandle}
      variant="outlined"
      size="large"
      startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    >
      {isFavorite ? 'Car added favorites' : 'Add car to favorites'}
    </Button>
  );
};

export default AddToFavoriteButton;
