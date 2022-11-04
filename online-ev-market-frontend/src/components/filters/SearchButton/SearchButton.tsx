import React from 'react';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchButton: React.FC = () => {
  console.log(123);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        sx={{
          width: { xs: '80%', sm: '70%', md: '60%', lg: '50%' },
        }}
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchButton;
