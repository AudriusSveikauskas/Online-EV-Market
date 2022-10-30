import { NextFunction, Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';

const roleValidator = (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.body;
  const { user } = req.session;

  if (user?.role !== 'admin' && role !== user?.role) {
    res
      .status(401)
      .send(
        responseMessage(401, 'You are not authorized to access this page.'),
      );
  }

  return next();
};

export default roleValidator;
