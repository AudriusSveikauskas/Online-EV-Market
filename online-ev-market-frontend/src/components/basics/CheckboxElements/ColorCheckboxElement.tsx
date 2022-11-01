import * as React from 'react';
import { Checkbox, FormControlLabel, lighten } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import setContrastColor from '@/helpers/setContrastColor';
import {
  COLOR_CHECKBOX_DARKEN,
  COLOR_CHECKBOX_LIGHTEN,
  COLOR_CHECKBOX_PADDING,
  COLOR_CHECKBOX_SIZE,
} from '@/utils/constants/constants';

type ColorCheckboxElementProps = {
  id: string;
  name: string;
  label: string;
  backgroundColor: string;
};

const ColorCheckboxElement: React.FC<ColorCheckboxElementProps> = ({
  id,
  name,
  label,
  backgroundColor,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const contrastColor = setContrastColor(backgroundColor);

  let checkboxColor = '';

  if (contrastColor === 'dark') {
    checkboxColor = COLOR_CHECKBOX_DARKEN;
  } else if (contrastColor === 'light') {
    checkboxColor = COLOR_CHECKBOX_LIGHTEN;
  }

  const hoverBackgroundColor = lighten(`${backgroundColor}`, 0.8);

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          icon={<AddIcon />}
          checkedIcon={<CheckIcon />}
          id={id}
          onChange={handleChange}
          name={name}
          checked={checked}
          sx={{
            backgroundColor: 'grey.300',
            borderRadius: '4px',
            padding: COLOR_CHECKBOX_PADDING,
            ':hover': { backgroundColor: `${hoverBackgroundColor}` },
            '&.Mui-checked': {
              backgroundColor: `${backgroundColor}`,
            },
            '& .MuiSvgIcon-root': {
              fontSize: COLOR_CHECKBOX_SIZE,
              color: `${checkboxColor}`,
            },
            mr: 1,
          }}
        />
      }
    />
  );
};

export default ColorCheckboxElement;
