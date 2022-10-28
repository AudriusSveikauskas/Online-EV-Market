import { NextFunction, Request, Response } from 'express';
import userModel from '../../models/userModel';

const isEmailUniqueValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  const isEmailAlreadyRegistered = await userModel.findOne({
    email,
  });

  if (isEmailAlreadyRegistered) {
    return res.status(400).send({
      msg: 'This email is already associated with an account.',
    });
  }

  return next();
};

export default isEmailUniqueValidator;
