import express from 'express';
import signUpController from '../controllers/user/signUpController';
import signInController from '../controllers/user/signInController';
import emailAddressValidator from '../middleware/email/emailAddressValidator';
import isEmailUniqueValidator from '../middleware/email/isEmailUniqueValidator';
import passwordFormatValidator from '../middleware/password/passwordFormatValidator';
import nameValidator from '../middleware/user/nameValidator';
import passwordValidator from '../middleware/password/passwordValidator';
import userValidator from '../middleware/user/userValidator';
import authorizationController from '../controllers/user/authorizationController';
import tokenValidator from '../middleware/auth/tokenValidator';
import roleValidator from '../middleware/auth/roleValidator';

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

userRoute.post('/auth', tokenValidator, roleValidator, authorizationController);

export default userRoute;
