import { Request, Response } from 'express';
import CarModel from '../../models/CarModel';
import responseMessage from '../../helpers/responseMessage';
import equipmentModel from '../../models/EquipmentModel';

const getCarDetailsController = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;

    const car = await CarModel.find({
      _id,
    });

    const equipment = await equipmentModel.find();

    res.status(200).send({
      car,
      equipment,
    });
  } catch (error) {
    res.status(500).send(responseMessage(500, `Server error. ${error}.`));
  }
};

export default getCarDetailsController;
