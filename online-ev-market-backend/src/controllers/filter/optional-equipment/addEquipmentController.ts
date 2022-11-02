import { Request, Response } from 'express';
import EquipmentModel from '../../../models/EquipmentModel';
import responseMessage from '../../../helpers/responseMessage';

const addEquipmentController = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newEquipment = new EquipmentModel({
      name: name.trim(),
    });

    const equipment = await newEquipment.save();

    return res
      .status(200)
      .send(
        responseMessage(
          200,
          `Equipment ${name.trim()} has been successfully added to the database.`,
          equipment,
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

export default addEquipmentController;
