import { Request, Response } from 'express';
import EquipmentModel from '../../../models/EquipmentModel';
import responseMessage from '../../../helpers/responseMessage';

const deleteEquipmentController = async (req: Request, res: Response) => {
  console.log('req.params - ', req.params);

  try {
    const { _id } = req.params;
    const { name } = req.body;
    await EquipmentModel.deleteOne({
      _id,
    });

    return res
      .status(200)
      .send(
        responseMessage(
          200,
          `Equipment ${name} has been successfully deleted from the database.`,
        ),
      );
  } catch (error) {
    return res
      .status(500)
      .send(responseMessage(500, `Failed to delete. ${error}.`));
  }
};

export default deleteEquipmentController;
