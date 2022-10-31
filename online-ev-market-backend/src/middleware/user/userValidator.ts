import { NextFunction, Request, Response } from 'express';
import UserModel from '../../models/userModel';
import responseMessage from '../../helpers/responseMessage';

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
    return res
      .status(401)
      .send(
        responseMessage(
          401,
          'The email address or password you entered is incorrect.',
        ),
      );
  }

  req.body.user = user;

  return next();
};

export default userValidator;
