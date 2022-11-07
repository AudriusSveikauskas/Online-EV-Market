import { NextFunction, Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';

const requiredValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    modelId,
    registration,
    price,
    mileage,
    doors,
    seats,
    battery,
    power,
    photo1,
  } = req.body;

  const arr = [
    {
      model: modelId,
    },
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
    {
      photo1,
    },
  ];

  const itemArr = [] as string[];

  arr.forEach((item) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(item)) {
      if (value === '-1' || value === ' ' || value === '') {
        itemArr.push(key.toUpperCase());
      }
    }
  });

  if (itemArr.length > 0) {
    return res
      .status(400)
      .send(responseMessage(400, `${itemArr.join(', ')} fields are required!`));
  }

  return next();
};

export default requiredValidator;
