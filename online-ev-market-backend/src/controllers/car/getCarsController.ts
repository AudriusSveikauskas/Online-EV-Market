import { Request, Response } from 'express';
import CarModel from '../../models/CarModel';
import ModelModel from '../../models/ModelModel';
import BrandModel from '../../models/BrandModel';

const getCarsController = async (req: Request, res: Response) => {
  try {
    const cars = await CarModel.find();
    const models = await ModelModel.find();
    const brands = await BrandModel.find();

    res.status(200).send({
      cars,
      models,
      brands,
    });
  } catch (error) {
    console.warn('getCarsController error: ', error);
    res.status(500).send({
      cars: [],
    });
  }
};
export default getCarsController;
