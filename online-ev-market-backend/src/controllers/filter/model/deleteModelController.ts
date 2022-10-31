import { Request, Response } from 'express';
import responseMessage from '../../../helpers/responseMessage';
import ModelModel from '../../../models/ModelModel';

const deleteModelController = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    console.log('___________id: ', _id);
    const { name } = req.body;
    await ModelModel.deleteOne({
      _id,
    });

    return res
      .status(200)
      .send(
        responseMessage(
          200,
          `Model ${name} has been successfully deleted from the database.`,
        ),
      );
  } catch (error) {
    return res
      .status(500)
      .send(responseMessage(500, `Failed to delete. ${error}.`));
  }
};

export default deleteModelController;
