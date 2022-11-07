import React from 'react';
import { Input, InputAdornment } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type InputFieldProps = {
  id: string;
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  endAdornment?: string;
  placeholder?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  endAdornment,
  placeholder,
}) => {
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ width: '100%', textAlign: 'center' }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        sx={{ textAlign: 'center' }}
        id={id}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment sx={{ textAlign: 'center' }} position="end">
            {endAdornment}
          </InputAdornment>
        }
        aria-describedby={`${id}-input`}
      />
    </FormControl>
  );
};

export default InputField;
