import * as React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionElementProps = {
  id: string;
  title: string;
  expanded: boolean;
  onChange: () => void;
  children: React.ReactNode;
};

const AccordionElement: React.FC<AccordionElementProps> = ({
  id,
  title,
  expanded,
  onChange,
  children,
}) => (
  <Accordion expanded={expanded} sx={{ boxShadow: 'none' }} onChange={onChange}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={id}
      id={id}
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box>{children}</Box>
    </AccordionDetails>
  </Accordion>
);

export default AccordionElement;
