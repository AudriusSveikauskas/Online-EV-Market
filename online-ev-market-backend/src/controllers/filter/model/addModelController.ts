import { Request, Response } from 'express';
import responseMessage from '../../../helpers/responseMessage';
import ModelModel from '../../../models/ModelModel';

const addModelController = async (req: Request, res: Response) => {
  const { _id: brandId, name } = req.body;

  try {
    const newModel = new ModelModel({
      brandId,
      name: name.trim(),
    });

    await newModel.save();

    return res
      .status(200)
      .send(
        responseMessage(
          200,
          `Model ${name.trim()} has been successfully added to the database.`,
        ),
      );
  } catch (error) {
    return res
      .status(500)
      .send(
        responseMessage(500, `${error}. Please contact site administrator.`),
      );
  }
};

export default addModelController;
