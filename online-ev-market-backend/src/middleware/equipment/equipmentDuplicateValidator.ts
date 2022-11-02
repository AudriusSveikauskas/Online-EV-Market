import { NextFunction, Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';
import EquipmentModel from '../../models/EquipmentModel';

const equipmentDuplicateValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name } = req.body;

  try {
    const equipment = await EquipmentModel.findOne({
      name: name.trim(),
    });
    if (equipment === null) {
      return next();
    }
    return res
      .status(400)
      .send(
        responseMessage(400, `Equipment ${name}, already in the database.`),
      );
  } catch (error) {
    return res
      .status(500)
      .send(responseMessage(500, `The operation failed. ${error}`));
  }
};

export default equipmentDuplicateValidator;
