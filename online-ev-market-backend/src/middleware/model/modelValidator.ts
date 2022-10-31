import { NextFunction, Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';
import ModelModel from '../../models/ModelModel';

const modelValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { _id } = req.params;

  try {
    const model = await ModelModel.findOne({
      _id,
    });

    req.body.name = model?.name;
  } catch (error) {
    return res
      .status(400)
      .send(
        responseMessage(
          400,
          `The model with ID ${_id} does not exist in the database.`,
        ),
      );
  }

  return next();
};

export default modelValidator;
