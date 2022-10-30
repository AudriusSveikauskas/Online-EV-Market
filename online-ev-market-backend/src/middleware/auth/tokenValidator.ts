import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import responseMessage from '../../helpers/responseMessage';

const tokenValidator = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.session.user?.accessToken;
  const secret = process.env.JWT_SECRET;

  if (!accessToken) {
    return res
      .status(401)
      .send(
        responseMessage(
          401,
          'Session expired or invalid. Please Sign In Again.',
        ),
      );
  }

  try {
    jwt.verify(accessToken, secret as string);
  } catch (error) {
    return res
      .status(401)
      .send(
        responseMessage(
          401,
          'Session expired or invalid. Please Sign In Again.',
        ),
      );
  }

  return next();
};

export default tokenValidator;
