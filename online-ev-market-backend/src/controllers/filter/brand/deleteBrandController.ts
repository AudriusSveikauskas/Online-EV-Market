import { Request, Response } from 'express';
import BrandModel from '../../../models/BrandModel';
import responseMessage from '../../../helpers/responseMessage';

const deleteBrandController = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { name } = req.body;
    await BrandModel.deleteOne({
      _id,
    });

    return res
      .status(200)
      .send(
        responseMessage(
          200,
          `Brand ${name} has been successfully deleted from the database.`,
        ),
      );
  } catch (error) {
    return res
      .status(500)
      .send(responseMessage(500, `Failed to delete. ${error}.`));
  }
};

export default deleteBrandController;
