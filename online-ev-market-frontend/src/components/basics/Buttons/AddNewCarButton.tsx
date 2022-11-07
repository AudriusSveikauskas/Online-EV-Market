import React from 'react';
import { Box, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

type AddNewCarButtonProps = {
  onClick: () => void;
};

const AddNewCarButton: React.FC<AddNewCarButtonProps> = ({ onClick }) => {
  const onClickHandler = () => {
    onClick();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        sx={{
          width: { xs: '80%', sm: '70%', md: '60%', lg: '50%' },
        }}
        variant="contained"
        size="large"
        startIcon={<CheckIcon />}
        onClick={onClickHandler}
      >
        Post a car sale ad
      </Button>
    </Box>
  );
};

export default AddNewCarButton;
