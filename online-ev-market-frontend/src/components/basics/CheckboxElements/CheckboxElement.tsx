import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

type CheckboxElementProps = {
  id: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxElement: React.FC<CheckboxElementProps> = ({
  id,
  label,
  onChange,
}) => {
  console.log('CheckboxElement');

  return (
    <FormControlLabel
      control={<Checkbox onChange={onChange} name={id} />}
      label={label}
    />
  );
};

export default CheckboxElement;
