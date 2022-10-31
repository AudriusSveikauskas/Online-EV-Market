import { NextFunction, Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';
import ModelModel from '../../models/ModelModel';

const modelDuplicateValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name } = req.body;

  try {
    const model = await ModelModel.findOne({
      name: name.trim(),
    });
    if (model === null) {
      return next();
    }
    return res
      .status(400)
      .send(responseMessage(400, `Model ${name}, already in the database.`));
  } catch (error) {
    return res
      .status(500)
      .send(responseMessage(500, `The operation failed. ${error}`));
  }
};

export default modelDuplicateValidator;
