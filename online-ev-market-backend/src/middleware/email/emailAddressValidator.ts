import { NextFunction, Request, Response } from 'express';
import EmailValidator from 'email-validator';

const emailAddressValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  const isEmailValid = EmailValidator.validate(email);

  if (!isEmailValid) {
    res.status(400).send({
      msg: 'The email address is not valid!',
    });
  }

  req.body.email = email.toUpperCase();

  return next();
};

export default emailAddressValidator;
