import * as React from 'react';

import { Box, ImageList, ImageListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '@/components/basics/Search/Search';
import MobileSearch from '@/components/basics/Search/MobileSearch';
import get from '@/services/fetch/get';

const HomePage: React.FC = () => {
  const [cars, setCars] = useState<CarProps[]>([
    {
      _id: '-1',
      battery: -1,
      doors: -1,
      mileage: -1,
      modelId: '-1',
      photo1: '-1',
      power: -1,
      price: -1,
      registration: -1,
      userId: '-1',
    },
  ]);
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);

  const getFullName = (modelId: string) => {
    let modelName = '';
    let brandId = '';
    let brandName = '';

    models.forEach((item: ModelProps) => {
      if (item._id === modelId) {
        modelName = item.name;
        brandId = item.brandId;
      }
    });

    brands.forEach((item: { _id: string; name: string }) => {
      if (item._id === brandId) {
        brandName = item.name;
      }
    });

    return `${brandName} ${modelName}`;
  };

  useEffect(() => {
    async function getCars() {
      const carsArr = await get('cars');
      setCars(carsArr.data.cars);
      setModels(carsArr.data.models);
      setBrands(carsArr.data.brands);
    }

    getCars();
  }, []);

  return (
    <Box maxWidth="lg" sx={{ marginX: 'auto', backgroundColor: 'white' }}>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <MobileSearch />
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: 2 }}>
        <Search />
      </Box>

      <ImageList
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          scrollbarWidth: '0px',
          p: 2,
        }}
        cols={3}
        rowHeight={269}
      >
        {cars.map((item) => (
          <Box key={item._id}>
            <Link to={`car?_id=${item._id}&name=${getFullName(item.modelId)}`}>
              <ImageListItem sx={{ cursor: 'pointer' }}>
                <img src={`${item.photo1}`} alt={item._id} loading="lazy" />
              </ImageListItem>
            </Link>
          </Box>
        ))}
      </ImageList>
    </Box>
  );
};

export default HomePage;
