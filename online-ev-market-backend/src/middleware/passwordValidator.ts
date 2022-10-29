import { NextFunction, Request, Response } from 'express';
import validatePassword from '../helpers/auth/validatePassword';

const passwordValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password, user } = req.body;

  const validPassword = await validatePassword(password, user.password);

  if (!validPassword) {
    console.log('no');
    return res.send({
      ok: 'NO',
    });
  }

  console.log('ok');
  return next();
};

export default passwordValidator;
