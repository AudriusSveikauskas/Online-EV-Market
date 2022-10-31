import React, { ReactNode } from 'react';
import { Paper } from '@mui/material';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => (
  <Paper
    elevation={4}
    sx={{
      maxWidth: 'lg',
      marginX: { xs: 1, md: 2, lg: 'auto' },
      backgroundColor: 'white',
      p: { xs: 2, md: 3, lg: 4 },
    }}
  >
    {children}
  </Paper>
);

export default Container;
