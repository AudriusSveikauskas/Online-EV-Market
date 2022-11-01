import * as React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

import Search from './Search';

const MobileSearch: React.FC = () => (
  <Box sx={{ marginTop: 2, marginX: 1, flexGrow: 1 }}>
    <Accordion
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.contrastText' }} />}
        aria-controls="MobileSearch"
        id="panel1a-header"
      >
        <Box sx={{ display: 'flex' }}>
          <SearchIcon
            sx={{ color: 'primary.contrastText', marginRight: 0.6 }}
          />
          <Typography sx={{ color: 'primary.contrastText' }}>
            Open search
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Search />
      </AccordionDetails>
    </Accordion>
  </Box>
);

export default MobileSearch;
