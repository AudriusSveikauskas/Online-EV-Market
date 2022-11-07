import { Request, Response } from 'express';
import CarModel from '../../models/CarModel';
import ModelModel from '../../models/ModelModel';
import BrandModel from '../../models/BrandModel';

const filterCarsController = async (req: Request, res: Response) => {
  const {
    modelId,
    firstRegistrationFromYear,
    firstRegistrationToYear,
    priceFromAmount,
    priceUpToAmount,
    mileageFromKm,
    mileageUpToKm,
    // numberOfDoors,
    // numberOfSeats,
    batteryCapacityFromKWH,
    batteryCapacityToKWH,
    powerFromHP,
    powerToHP,
    // optionalEquipment,
    // exteriorColor,
    // interiorColor,
    // upholstery,
  } = req.body;

  const modelIdString = () => {
    if (modelId === '-1') {
      return null;
    }
    return modelId;
  };

  const firstRegistrationFromYearNumber = () => {
    if (firstRegistrationFromYear === '-1') {
      return 0;
    }
    return Number(firstRegistrationFromYear);
  };

  const firstRegistrationToYearNumber = () => {
    if (firstRegistrationToYear === '-1') {
      return 9999;
    }
    return Number(firstRegistrationToYear);
  };

  const priceFromAmountNumber = () => {
    if (priceFromAmount === '-1') {
      return 0;
    }
    return Number(priceFromAmount);
  };

  const priceUpToAmountNumber = () => {
    if (priceUpToAmount === '-1') {
      return 999999999999999;
    }
    return Number(priceUpToAmount);
  };

  const mileageFromKmNumber = () => {
    if (mileageFromKm === '-1') {
      return 0;
    }
    return Number(mileageFromKm);
  };

  const mileageUpToKmNumber = () => {
    if (mileageUpToKm === '-1') {
      return 999999999999999;
    }
    return Number(mileageUpToKm);
  };

  const powerFromHPKmNumber = () => {
    if (powerFromHP === '-1') {
      return 0;
    }
    return Number(powerFromHP);
  };

  const powerToHPNumber = () => {
    if (powerToHP === '-1') {
      return 999999999999999;
    }
    return Number(powerToHP);
  };

  const batteryCapacityFromKWHNumber = () => {
    if (batteryCapacityFromKWH === '-1') {
      return 0;
    }
    return Number(batteryCapacityFromKWH);
  };

  const batteryCapacityToKWHNumber = () => {
    if (batteryCapacityToKWH === '-1') {
      return 999999999999999;
    }
    return Number(batteryCapacityToKWH);
  };

  try {
    const cars = await CarModel.find({
      modelId: modelIdString(),
      registration: {
        $gt: firstRegistrationFromYearNumber(),
        $lt: firstRegistrationToYearNumber(),
      },
      price: {
        $gt: priceFromAmountNumber(),
        $lt: priceUpToAmountNumber(),
      },
      mileage: {
        $gt: mileageFromKmNumber(),
        $lt: mileageUpToKmNumber(),
      },
      power: {
        $gt: powerFromHPKmNumber(),
        $lt: powerToHPNumber(),
      },
      battery: {
        $gt: batteryCapacityFromKWHNumber(),
        $lt: batteryCapacityToKWHNumber(),
      },
    });
    const models = await ModelModel.find();
    const brands = await BrandModel.find();

    res.status(200).send({
      cars,
      models,
      brands,
    });
  } catch (error) {
    console.warn('filterCarsController error: ', error);
    res.status(500).send({
      cars: [],
    });
  }
};
export default filterCarsController;
