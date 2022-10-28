import { NextFunction, Request, Response } from 'express';
import normalizeName from '../helpers/normalizeName';

const nameValidator = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName } = req.body;

  const normalizedFirstName = normalizeName(firstName);

  if (normalizedFirstName.length < 2) {
    return res.status(400).send({
      msg: 'The name cannot be shorter than 2 characters!',
    });
  }

  const normalizedLastName = normalizeName(lastName);

  if (normalizedLastName.length < 3) {
    return res.status(400).send({
      msg: 'Last name cannot be shorter than 3 characters!',
    });
  }

  req.body.firstName = normalizedFirstName;
  req.body.lastName = normalizedLastName;

  return next();
};

export default nameValidator;
