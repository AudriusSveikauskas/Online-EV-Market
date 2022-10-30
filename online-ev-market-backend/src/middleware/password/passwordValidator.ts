import { NextFunction, Request, Response } from 'express';
import validatePassword from '../../helpers/auth/validatePassword';
import responseMessage from '../../helpers/responseMessage';

const passwordValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password, user } = req.body;

  const validPassword = await validatePassword(password, user.password);

  if (!validPassword) {
    return res
      .status(401)
      .send(
        responseMessage(
          401,
          'The email address or password you entered is incorrect.',
        ),
      );
  }

  return next();
};

export default passwordValidator;
