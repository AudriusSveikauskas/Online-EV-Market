import * as React from 'react';

import { InputAdornment, MenuItem, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import { ChangeEvent } from 'react';

export type Options = {
  _id: string;
  name: string;
};

type SelectTextFieldProps = {
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  label?: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  startAdornment?: string;
  endAdornment?: string;
  options: Options[];
};

const SelectTextField: React.FC<SelectTextFieldProps> = ({
  id,
  name,
  label,
  value,
  placeholder,
  onChange,
  helperText,
  startAdornment,
  endAdornment,
  options,
}) => (
  <TextField
    select
    id={id}
    name={name}
    label={label}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    helperText={helperText}
    variant="standard"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end" sx={{ mr: 3 }}>
          {endAdornment}
        </InputAdornment>
      ),
    }}
    sx={{ flexGrow: 1 }}
  >
    <MenuItem disabled value="-1">
      <Box
        sx={{
          textAlign: 'center',
          color: 'text.disabled',
        }}
      >
        {placeholder}
      </Box>
    </MenuItem>
    {options.map((option) => (
      <MenuItem key={option._id} value={option._id}>
        <Box sx={{ textAlign: 'center' }}>{option.name}</Box>
      </MenuItem>
    ))}
  </TextField>
);

export default SelectTextField;
