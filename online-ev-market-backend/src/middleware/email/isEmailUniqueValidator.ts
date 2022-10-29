import { NextFunction, Request, Response } from 'express';
import userModel from '../../models/userModel';
import responseMessage from '../../helpers/responseMessage';

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
    return res
      .status(400)
      .send(
        responseMessage(
          400,
          `Email address ${email} is already associated with an account!`,
        ),
      );
  }

  return next();
};

export default isEmailUniqueValidator;
