import { Request, Response } from 'express';
import EquipmentModel from '../../../models/EquipmentModel';

const getEquipmentController = async (req: Request, res: Response) => {
  try {
    const equipment = await EquipmentModel.find().sort({
      name: 1,
    });
    res.status(200).send({
      equipment,
    });
  } catch (error) {
    console.warn('getEquipmentController error: ', error);
    res.status(500).send({
      brands: [],
    });
  }
};

export default getEquipmentController;
