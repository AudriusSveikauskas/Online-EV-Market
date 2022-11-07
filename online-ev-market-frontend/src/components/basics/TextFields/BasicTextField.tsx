import React from 'react';
import { TextField } from '@mui/material';

type BasicTextFieldProps = {
  id: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  id,
  label,
  value,
  onChange,
}) => (
  <TextField
    size="medium"
    variant="standard"
    id={`${id}-input`}
    label={label}
    value={value}
    onChange={onChange}
    InputProps={{ startAdornment: ' ' }}
  />
);

export default BasicTextField;
