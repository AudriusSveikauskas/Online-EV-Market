import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText, InputAdornment } from '@mui/material';
import { Options } from '@/components/basics/TextFields/SelectTextField';

type MultipleSelectProps = {
  id: string;
  name: string;
  onChange: (e: SelectChangeEvent) => void;
  label?: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  startAdornment?: string;
  endAdornment?: string;
  options: Options[];
};

const MultipleSelect: React.FC<MultipleSelectProps> = ({
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
}) => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 368,
      },
    },
  };

  return (
    <Box sx={{ minWidth: 120, flexGrow: 1 }}>
      <FormControl fullWidth variant="standard">
        <InputLabel id={`${id}-select-label`}>{name}</InputLabel>
        <Select
          size="medium"
          labelId={`${id}-select-label`}
          id={`${id}-select`}
          value={value}
          label={label}
          onChange={onChange}
          MenuProps={MenuProps}
          startAdornment={
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end" sx={{ mr: 3 }}>
              {endAdornment}
            </InputAdornment>
          }
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
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MultipleSelect;
