import express from 'express';
import signUpController from '../controllers/user/signUpController';
import signInController from '../controllers/user/signInController';
import emailAddressValidator from '../middleware/email/emailAddressValidator';
import isEmailUniqueValidator from '../middleware/email/isEmailUniqueValidator';
import passwordValidator from '../middleware/passwordValidator';
import nameValidator from '../middleware/nameValidator';

const userRoute = express.Router();

userRoute.post(
  '/sign-up',
  nameValidator,
  emailAddressValidator,
  isEmailUniqueValidator,
  passwordValidator,
  signUpController,
);

userRoute.post('/sign-in', emailAddressValidator, signInController);

export default userRoute;
