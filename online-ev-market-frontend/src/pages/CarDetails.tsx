import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, Divider, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CheckIcon from '@mui/icons-material/Check';
import get from '@/services/fetch/get';
import upholstery from '@/static-data/upholstery';
import exteriorColor from '@/static-data/exteriorColor';
import interiorColor from '@/static-data/interiorColor';

const CarDetails: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [carId, setCarId] = useState<string>('');
  const [carDetails, setCarDetails] = useState<CarProps[]>([
    {
      _id: '-1',
      battery: -1,
      doors: -1,
      mileage: -1,
      modelId: '-1',
      photo1: '-1',
      photo2: '-1',
      photo3: '-1',
      photo4: '-1',
      photo5: '-1',
      power: -1,
      price: -1,
      exteriorColor: '-1',
      interiorColor: '-1',
      registration: -1,
      seats: -1,
      userId: '-1',
      equipment: [],
    },
  ]);
  const [carUpholstery, setCarUpholstery] = useState('');
  const [carExteriorColor, setCarExteriorColor] = useState('');
  const [carInteriorColor, setCarInteriorColor] = useState('');
  const [equipment, setEquipment] = useState([{ _id: '-1', name: '-1' }]);
  const [selectedEquipment, setSelectedEquipment] = useState(['']);

  const carName = searchParams.get('name');

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    async function getDetails() {
      const uphol = upholstery.filter(
        (item) => item.id === carDetails[0].upholstery,
      )[0];

      const extCol = exteriorColor.filter(
        (item) => item.id === carDetails[0].exteriorColor,
      )[0];

      const intCol = interiorColor.filter(
        (item) => item.id === carDetails[0].interiorColor,
      )[0];

      const eArr: string[] = [];
      carDetails[0]?.equipment?.forEach((item) => {
        const arr = equipment.filter((eq) => eq._id === item);

        arr.map((i) => eArr.push(i.name.toString()));

        setSelectedEquipment(eArr);
      });

      if (uphol !== undefined) {
        setCarUpholstery(uphol.name);
      }

      if (extCol !== undefined) {
        setCarExteriorColor(extCol.label);
      }

      if (intCol !== undefined) {
        setCarInteriorColor(intCol.label);
      }
    }

    getDetails();
  }, [carDetails]);

  useEffect(() => {
    async function getCar() {
      const car = await get('car', carId);
      setCarDetails(car.data.car);
      setEquipment(car.data.equipment);
    }

    if (carId.length > 1) {
      getCar();
    }
  }, [carId]);

  useEffect(() => {
    const id = searchParams.get('_id');
    if (id) {
      setCarId(id);
    }
  }, []);

  return (
    <Box
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginX: 'auto',
        gap: 2,
        mb: 4,
        mt: 2,
      }}
    >
      <Card sx={{ p: 4 }}>
        {carDetails.map((item) => (
          <Box key={item._id}>
            <Typography
              textAlign="center"
              fontWeight={700}
              variant="h4"
              sx={{ mb: 2 }}
            >
              {`${carName} (${item.price} €)`}
            </Typography>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots
              responsive={responsive}
              ssr
              infinite
              autoPlaySpeed={1000}
              keyBoardControl
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  variant="square"
                  alt={item._id}
                  src={item.photo1}
                  sx={{
                    height: { xs: '289px', sm: '500px', md: '599px' },
                    width: { xs: '386px', sm: '668px', md: '800px' },
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  variant="square"
                  alt={item._id}
                  src={item.photo2}
                  sx={{
                    height: { xs: '289px', sm: '500px', md: '599px' },
                    width: { xs: '386px', sm: '668px', md: '800px' },
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  variant="square"
                  alt={item._id}
                  src={item.photo3}
                  sx={{
                    height: { xs: '289px', sm: '500px', md: '599px' },
                    width: { xs: '386px', sm: '668px', md: '800px' },
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  variant="square"
                  alt={item._id}
                  src={item.photo4}
                  sx={{
                    height: { xs: '289px', sm: '500px', md: '599px' },
                    width: { xs: '386px', sm: '668px', md: '800px' },
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  variant="square"
                  alt={item._id}
                  src={item.photo5}
                  sx={{
                    height: { xs: '289px', sm: '500px', md: '599px' },
                    width: { xs: '386px', sm: '668px', md: '800px' },
                  }}
                />
              </Box>
            </Carousel>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '800px',
                marginX: 'auto',
                mt: 4,
              }}
            >
              <Divider sx={{ marginY: 4 }} />

              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '30%' }}>
                  <Typography variant="h6">Basic data</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`First registration: ${item.registration}`}
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Mileage: ${item.mileage} km`}
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Number of doors: ${item.doors}`}
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Number of seats: ${item.seats}`}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ marginY: 4 }} />

              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '30%' }}>
                  <Typography variant="h6">Technical Data</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Battery capacity: ${item.battery} kWh`}
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Power: ${item.power} hp`}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ marginY: 4 }} />

              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '30%' }}>
                  <Typography variant="h6">Optional Equipment</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {selectedEquipment.map((selected) => (
                    <Typography
                      key={selected}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <CheckIcon sx={{ mr: 1 }} />
                      {`${selected}`}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Divider sx={{ marginY: 4 }} />

              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '30%' }}>
                  <Typography variant="h6">Exterior</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Body color: ${carExteriorColor}`}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ marginY: 4 }} />

              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '30%' }}>
                  <Typography variant="h6">Interior</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Interior color: ${carInteriorColor}`}
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {`Upholstery: ${carUpholstery}`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Card>
    </Box>
  );
};

export default CarDetails;
