import * as React from 'react';

import {
  Typography,
  FormControlLabel,
  Switch,
  Container,
  Box,
} from '@mui/material';

type SwitchElementProps = {
  labelOn?: string;
  labelOff?: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom' | undefined;
  defaultChecked?: boolean;
};

const SwitchElement: React.FC<SwitchElementProps> = ({
  labelOn,
  labelOff,
  labelPlacement,
  defaultChecked,
}) => (
  <Box>
    <Typography
      sx={{ fontSize: '.75rem', color: 'rgba(0, 0, 0, 0.6)', mt: '-2px' }}
    >
      Battery included
    </Typography>
    <Container>
      <FormControlLabel
        control={<Switch defaultChecked={defaultChecked} />}
        label={defaultChecked ? labelOn : labelOff}
        labelPlacement={labelPlacement}
      />
    </Container>
  </Box>
);

export default SwitchElement;
