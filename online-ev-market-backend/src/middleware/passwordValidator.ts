import { NextFunction, Request, Response } from 'express';

const passwordValidator = (req: Request, res: Response, next: NextFunction) => {
  const { password, password2 } = req.body;

  if (password.length < 6) {
    return res.status(400).send({
      msg: 'Passwords must be at least 6 characters long!',
    });
  }

  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;

  password.split('').forEach((char: string) => {
    if (char === char.toLowerCase() && Number.isNaN(Number(char))) {
      hasLowerCase = true;
    }

    if (char === char.toUpperCase() && Number.isNaN(Number(char))) {
      hasUpperCase = true;
    }

    if (!Number.isNaN(Number(char))) {
      hasNumber = true;
    }
  });

  if (!hasLowerCase) {
    return res.status(400).send({
      msg: 'Password should have at least one lowercase letter!',
    });
  }

  if (!hasUpperCase) {
    return res.status(400).send({
      msg: 'Password should have at least one uppercase letter!',
    });
  }

  if (!hasNumber) {
    return res.status(400).send({
      msg: 'Password should have at least one number!',
    });
  }

  if (password !== password2) {
    return res.status(400).send({
      msg: 'Passwords do not match!',
    });
  }

  return next();
};

export default passwordValidator;
