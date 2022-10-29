import React, { FormEvent, useState } from 'react';

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
import axios from 'axios';
import post from '@/services/fetch/post';
import AlertMsg from '@/helpers/AlertMsg';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMsg, setDialogMsg] = useState({
    title: '',
    contentText: '',
    status: -1,
  });

  const signInLinkHandler = () => {
    navigate('/sign-in');
  };

  const dialogOnClickHandler = () => {
    setDialogOpen(false);
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      firstName: HTMLInputElement;
      lastName: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
      password2: HTMLInputElement;
    };
    const formData = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      email: formElements.email.value,
      password: formElements.password.value,
      password2: formElements.password2.value,
    };

    try {
      const res = await post('sign-up', formData);

      if (res.data) {
        navigate(
          `/sign-in?response=${JSON.stringify({
            status: res.status,
            title: res.data.title,
            message: res.data.message,
          })}`,
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setDialogMsg({
          title: error.response.data.title,
          contentText: error.response.data.message,
          status: error.response.status as number,
        });
      } else {
        setDialogMsg({
          title: 'Server Error:',
          contentText: `${error}. Please contact site administrator.`,
          status: 500,
        });
      }
      setDialogOpen(true);
    }
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
            />

            <TextField
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
            name="password2"
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
            ':hover': {
              textDecoration: 'underline',
              backgroundColor: 'white',
            },
          }}
          onClick={signInLinkHandler}
          variant="text"
        >
          Already have an account? Sign in
        </Button>
      </Box>
      <AlertMsg
        msg={dialogMsg}
        open={dialogOpen}
        onClick={dialogOnClickHandler}
      />
    </Card>
  );
};

export default SignUpPage;
