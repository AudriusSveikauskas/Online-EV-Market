import { Request, Response } from 'express';
import BrandModel from '../../../models/BrandModel';

const getBrandsController = async (req: Request, res: Response) => {
  try {
    const brands = await BrandModel.find().sort({
      name: 1,
    });
    res.status(200).send({
      brands,
    });
  } catch (error) {
    console.warn('getBrandsController error: ', error);
    res.status(500).send({
      brands: [],
    });
  }
};

export default getBrandsController;
