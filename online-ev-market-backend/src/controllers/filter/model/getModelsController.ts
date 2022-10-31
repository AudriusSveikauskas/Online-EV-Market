import { Request, Response } from 'express';
import ModelModel from '../../../models/ModelModel';

const getModelsController = async (req: Request, res: Response) => {
  const { _id } = req.params;

  try {
    const models = await ModelModel.find({
      brandId: _id,
    }).sort({
      name: 1,
    });
    return res.status(200).send({
      models,
    });
  } catch (error) {
    return res.status(500).send({
      models: [],
    });
  }
};

export default getModelsController;
