import { Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';
import CarModel from '../../models/CarModel';

const addCarController = async (req: Request, res: Response) => {
  const { user } = req.session;

  const {
    modelId,
    registration,
    equipment,
    price,
    mileage,
    doors,
    seats,
    battery,
    power,
    extColor,
    intColor,
    intUpholstery,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
  } = req.body;

  try {
    const newCar = new CarModel({
      userId: user?._id,
      modelId,
      registration,
      price,
      mileage,
      doors,
      seats,
      battery,
      power,
      equipment,
      exteriorColor: extColor,
      interiorColor: intColor,
      upholstery: intUpholstery,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
    });

    await newCar.save();

    return res
      .status(200)
      .send(
        responseMessage(
          200,
          'Your car has been successfully added to the database.',
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

export default addCarController;
