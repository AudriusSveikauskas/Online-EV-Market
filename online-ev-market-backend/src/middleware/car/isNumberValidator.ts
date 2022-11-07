import { NextFunction, Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';
import stringToNumber from '../../helpers/stringToNumber';

const isNumberValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { registration, price, mileage, doors, seats, battery, power } =
    req.body;

  const arr = [
    {
      registration,
    },
    {
      price,
    },
    {
      mileage,
    },
    {
      doors,
    },
    {
      seats,
    },
    {
      battery,
    },
    {
      power,
    },
  ];
  const wrongItemArr = [] as string[];

  arr.forEach((item) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(item)) {
      const convertedNumber = stringToNumber(value as string);
      if (convertedNumber === -1) {
        wrongItemArr.push(key.toUpperCase());
      }
      req.body[`${key}`] = convertedNumber;
    }
  });

  if (wrongItemArr.length > 0) {
    return res
      .status(400)
      .send(
        responseMessage(400, `${wrongItemArr.join(', ')} must be a number`),
      );
  }

  return next();
};

export default isNumberValidator;
