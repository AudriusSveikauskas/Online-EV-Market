import React, { FormEvent } from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from '@mui/material';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const signInLinkHandler = () => {
    navigate('/sign-in');
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      firstName: HTMLInputElement;
      lastName: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
      repeatedPassword: HTMLInputElement;
    };
    const formData = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      email: formElements.email.value,
      password: formElements.password.value,
      repeatedPassword: formElements.repeatedPassword.value,
    };

    console.log(formData);
  };

  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: '400px',
        marginX: { xs: 2, sm: 'auto' },
        mt: 4,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Avatar
        sx={{
          alignSelf: 'center',
          width: 50,
          height: 50,
          backgroundColor: '#1976d2',
        }}
      >
        <LockOpenIcon />
      </Avatar>

      <Typography variant="h5" sx={{ alignSelf: 'center' }}>
        Sign up
      </Typography>
      <form onSubmit={formSubmitHandler}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}
          >
            <TextField
              id="first-name-input"
              name="firstName"
              label="First Name *"
              variant="outlined"
              helperText=""
            />

            <TextField
              error
              id="last-name-input"
              name="lastName"
              label="Last Name *"
              variant="outlined"
            />
          </Box>

          <TextField
            id="email-address-input"
            name="email"
            label="Email Address *"
            variant="outlined"
          />

          <TextField
            id="password-input"
            name="password"
            label="Password *"
            variant="outlined"
          />

          <TextField
            id="password-repeat-input"
            name="repeatedPassword"
            label="Repeat Password *"
            variant="outlined"
          />
          <Button type="submit" variant="contained" size="large" sx={{ mt: 1 }}>
            Sign up
          </Button>
        </Box>
      </form>

      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          sx={{
            textTransform: 'none',
            ':hover': { textDecoration: 'underline', backgroundColor: 'white' },
          }}
          onClick={signInLinkHandler}
          variant="text"
        >
          Already have an account? Sign in
        </Button>
      </Box>
    </Card>
  );
};

export default SignUpPage;