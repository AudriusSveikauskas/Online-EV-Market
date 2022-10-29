import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/userModel';
import responseMessage from '../helpers/responseMessage';

const userValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  const user = await UserModel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).send(responseMessage(400, 'baaaaaaaaad'));
  }

  req.body.user = user;

  return next();
};

export default userValidator;
