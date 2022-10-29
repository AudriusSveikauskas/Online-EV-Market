import express from 'express';
import signUpController from '../controllers/user/signUpController';
import signInController from '../controllers/user/signInController';
import emailAddressValidator from '../middleware/email/emailAddressValidator';
import isEmailUniqueValidator from '../middleware/email/isEmailUniqueValidator';
import passwordFormatValidator from '../middleware/passwordFormatValidator';
import nameValidator from '../middleware/nameValidator';
import passwordValidator from '../middleware/passwordValidator';
import userValidator from '../middleware/userValidator';

const userRoute = express.Router();

userRoute.post(
  '/sign-up',
  nameValidator,
  emailAddressValidator,
  isEmailUniqueValidator,
  passwordFormatValidator,
  signUpController,
);

userRoute.post('/sign-in', userValidator, passwordValidator, signInController);

export default userRoute;
