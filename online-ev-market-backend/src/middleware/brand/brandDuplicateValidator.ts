import { NextFunction, Request, Response } from 'express';
import BrandModel from '../../models/BrandModel';
import responseMessage from '../../helpers/responseMessage';

const brandDuplicateValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name } = req.body;

  try {
    const brand = await BrandModel.findOne({
      name: name.trim(),
    });
    if (brand === null) {
      return next();
    }
    return res
      .status(400)
      .send(responseMessage(400, `Brand ${name}, already in the database.`));
  } catch (error) {
    return res
      .status(500)
      .send(responseMessage(500, `The operation failed. ${error}`));
  }
};

export default brandDuplicateValidator;
