import React from 'react';
import { Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

type AddNewSettingsButtonProps = {
  id: string;
  label: string;
  isDisabled: boolean;
  onClick: () => void;
  children?: React.ReactNode;
};

const AddNewSettingsButton: React.FC<AddNewSettingsButtonProps> = ({
  id,
  label,
  isDisabled,
  onClick,
  children,
}) => (
  <Button
    onClick={onClick}
    sx={{ mt: '3px' }}
    id={`${id}-button`}
    disabled={isDisabled}
    color="success"
    size="large"
    variant="contained"
    type="submit"
    endIcon={<AddIcon />}
  >
    {children !== undefined ? children : `Add new ${label}`}
  </Button>
);

export default AddNewSettingsButton;
