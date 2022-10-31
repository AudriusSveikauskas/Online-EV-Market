import { NextFunction, Request, Response } from 'express';
import BrandModel from '../../models/BrandModel';
import responseMessage from '../../helpers/responseMessage';

const brandValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { _id } = req.params;

  try {
    const brand = await BrandModel.findOne({
      _id,
    });

    req.body.name = brand?.name;
  } catch (error) {
    return res
      .status(400)
      .send(
        responseMessage(
          400,
          `The brand with ID ${_id} does not exist in the database.`,
        ),
      );
  }

  return next();
};

export default brandValidator;
