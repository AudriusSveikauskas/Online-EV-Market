import { Request, Response } from 'express';
import responseMessage from '../../../helpers/responseMessage';
import BrandModel from '../../../models/BrandModel';

const addBrandController = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newBrand = new BrandModel({
      name: name.trim(),
    });

    const brands = await newBrand.save();

    return res
      .status(200)
      .send(
        responseMessage(
          200,
          `Brand ${name.trim()} has been successfully added to the database.`,
          brands,
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

export default addBrandController;
