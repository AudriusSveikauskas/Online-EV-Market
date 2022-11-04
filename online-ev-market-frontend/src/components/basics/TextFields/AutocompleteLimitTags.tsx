import React, { SyntheticEvent } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export type BodyProps = {
  id: string;
  name: string;
};

type AutocompleteLimitTagsProps = {
  id: string;
  label: string;
  options: BodyProps[];
  placeholder: string;
  onChange: (event: SyntheticEvent<Element, Event>, value: BodyProps[]) => void;
};

const AutocompleteLimitTags: React.FC<AutocompleteLimitTagsProps> = ({
  id,
  label,
  options,
  placeholder,
  onChange,
}) => (
  <Autocomplete
    multiple
    limitTags={3}
    id={id}
    options={options}
    getOptionLabel={(option) => option.name}
    defaultValue={[options[0]]}
    onChange={onChange}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        placeholder={placeholder}
        variant="standard"
      />
    )}
    sx={{ width: '100%' }}
  />
);

export default AutocompleteLimitTags;
