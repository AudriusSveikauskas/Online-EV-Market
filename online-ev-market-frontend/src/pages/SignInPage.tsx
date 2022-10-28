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
import postFetch from '@/services/fetch/postFetch';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const signInLinkHandler = () => {
    navigate('/sign-up');
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    const formData = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    const res = await postFetch('sign-in', formData);
    console.log(res);
  };

  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: '440px',
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
        Sign in
      </Typography>
      <form onSubmit={formSubmitHandler}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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

          <Button type="submit" variant="contained" size="large" sx={{ mt: 1 }}>
            Sign in
          </Button>
        </Box>
      </form>

      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          sx={{
            textTransform: 'none',
            ':hover': {
              textDecoration: 'underline',
              backgroundColor: 'white',
            },
          }}
          onClick={signInLinkHandler}
          variant="text"
        >
          Don&apos;t have an account? Sign Up
        </Button>
      </Box>
    </Card>
  );
};

export default SignInPage;
