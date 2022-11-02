import { NextFunction, Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';
import EquipmentModel from '../../models/EquipmentModel';

const equipmentValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { _id } = req.params;

  try {
    const equipment = await EquipmentModel.findOne({
      _id,
    });

    req.body.name = equipment?.name;
  } catch (error) {
    return res
      .status(400)
      .send(
        responseMessage(
          400,
          `The equipment with ID ${_id} does not exist in the database.`,
        ),
      );
  }

  return next();
};

export default equipmentValidator;
