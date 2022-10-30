import React from 'react';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import post from '@/services/fetch/post';

const HomePage: React.FC = () => {
  const clickHandler = async () => {
    try {
      const res = await post('auth', { ok: 'ok' });
      console.dir(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Button onClick={clickHandler}>click</Button>
    </Box>
  );
};

export default HomePage;
