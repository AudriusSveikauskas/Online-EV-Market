import { NextFunction, Request, Response } from 'express';
import EmailValidator from 'email-validator';
import responseMessage from '../../helpers/responseMessage';

const emailAddressValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  const isEmailValid = EmailValidator.validate(email);

  if (!isEmailValid) {
    return res
      .status(400)
      .send(responseMessage(400, `The email address ${email} is not valid!`));
  }

  req.body.email = email.toLowerCase();

  return next();
};

export default emailAddressValidator;
