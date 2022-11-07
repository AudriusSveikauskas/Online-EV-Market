import { Request, Response } from 'express';
import CarModel from '../../models/CarModel';
import ModelModel from '../../models/ModelModel';
import BrandModel from '../../models/BrandModel';

const filterCarsController = async (req: Request, res: Response) => {
  const {
    makeId,
    modelId,
    firstRegistrationFromYear,
    firstRegistrationToYear,
    priceFromAmount,
    priceUpToAmount,
    mileageFromKm,
    mileageUpToKm,
    batteryCapacityFromKWH,
    batteryCapacityToKWH,
    powerFromHP,
    powerToHP,
    numberOfDoors,
    numberOfSeats,
    optionalEquipment,
    exteriorColor,
    interiorColor,
    upholstery,
  } = req.body;

  // model

  const modelIdQuery = async () => {
    if (modelId === '-1' && makeId === '-1') {
      return {
        $exists: true,
      };
    }
    if (modelId === '-1' && makeId !== '-1') {
      const arr = await ModelModel.find({
        brandId: makeId,
      });
      const modelArr: string[] = [];
      arr.forEach((item) => {
        const id = item._id.toString();
        modelArr.push(id);
      });
      return {
        $in: modelArr,
      };
    }
    return {
      $eq: modelId,
    };
  };

  // first registration

  const firstRegistrationFromYearQuery = () => {
    if (firstRegistrationFromYear === '-1') {
      return {
        $gte: 0,
      };
    }
    return {
      $gte: Number(firstRegistrationFromYear),
    };
  };

  const firstRegistrationToYearQuery = () => {
    if (firstRegistrationToYear === '-1') {
      return {
        $lte: 9999,
      };
    }
    return {
      $lte: Number(firstRegistrationToYear),
    };
  };

  // price

  const priceFromAmountQuery = () => {
    if (priceFromAmount === '-1') {
      return {
        $gte: 0,
      };
    }
    return {
      $gte: Number(priceFromAmount),
    };
  };

  const priceUpToAmountQuery = () => {
    if (priceUpToAmount === '-1') {
      return {
        $lte: 9999999,
      };
    }
    return {
      $lte: Number(priceUpToAmount),
    };
  };

  // mileage

  const mileageFromKmQuery = () => {
    if (mileageFromKm === '-1') {
      return {
        $gte: 0,
      };
    }
    return {
      $gte: Number(mileageFromKm),
    };
  };

  const mileageUpToKmQuery = () => {
    if (mileageUpToKm === '-1') {
      return {
        $lte: 9999999,
      };
    }
    return {
      $lte: Number(mileageUpToKm),
    };
  };

  // battery

  const batteryCapacityFromKWHQuery = () => {
    if (batteryCapacityFromKWH === '-1') {
      return {
        $gte: 0,
      };
    }
    return {
      $gte: Number(batteryCapacityFromKWH),
    };
  };

  const batteryCapacityToKWHQuery = () => {
    if (batteryCapacityToKWH === '-1') {
      return {
        $lte: 9999999,
      };
    }
    return {
      $lte: Number(batteryCapacityToKWH),
    };
  };

  // power

  const powerFromHPQuery = () => {
    if (powerFromHP === '-1') {
      return {
        $gte: 0,
      };
    }
    return {
      $gte: Number(powerFromHP),
    };
  };

  const powerToHPQuery = () => {
    if (powerToHP === '-1') {
      return {
        $lte: 9999999,
      };
    }
    return {
      $lte: Number(powerToHP),
    };
  };

  // doors

  const numberOfDoorsQuery = () => {
    if (numberOfDoors === '3') {
      return [
        {
          $gte: 2,
        },
        {
          $lte: 3,
        },
      ];
    }
    if (numberOfDoors === '5') {
      return [
        {
          $gte: 4,
        },
        {
          $lte: 5,
        },
      ];
    }
    return [
      {
        $exists: true,
      },
      {
        $exists: true,
      },
    ];
  };

  // seats

  const numberOfSeatsQuery = () => {
    if (numberOfSeats === '2') {
      return {
        $eq: Number(numberOfSeats),
      };
    }
    if (numberOfSeats === '4') {
      return {
        $eq: Number(numberOfSeats),
      };
    }
    if (numberOfSeats === '5') {
      return {
        $eq: Number(numberOfSeats),
      };
    }
    return {
      $exists: true,
    };
  };

  // equipment

  const optionalEquipmentQuery = () => {
    if (optionalEquipment.length === 0) {
      return {
        $exists: true,
      };
    }
    return {
      $in: optionalEquipment,
    };
  };

  // exterior color

  const exteriorColorQuery = () => {
    if (exteriorColor.length === 0) {
      return {
        $exists: true,
      };
    }
    return {
      $in: exteriorColor,
    };
  };

  // interior color

  const interiorColorQuery = () => {
    if (interiorColor.length === 0) {
      return {
        $exists: true,
      };
    }
    return {
      $in: interiorColor,
    };
  };

  // upholstery

  const upholsteryQuery = () => {
    if (upholstery.length === 0) {
      return {
        $exists: true,
      };
    }
    return {
      $in: upholstery,
    };
  };

  try {
    const cars = await CarModel.find({
      $and: [
        {
          modelId: await modelIdQuery(),
        },
        {
          registration: firstRegistrationFromYearQuery(),
        },
        {
          registration: firstRegistrationToYearQuery(),
        },
        {
          price: priceFromAmountQuery(),
        },
        {
          price: priceUpToAmountQuery(),
        },
        {
          mileage: mileageFromKmQuery(),
        },
        {
          mileage: mileageUpToKmQuery(),
        },
        {
          battery: batteryCapacityFromKWHQuery(),
        },
        {
          battery: batteryCapacityToKWHQuery(),
        },
        {
          power: powerFromHPQuery(),
        },
        {
          power: powerToHPQuery(),
        },
        {
          doors: numberOfDoorsQuery()[0],
        },
        {
          doors: numberOfDoorsQuery()[1],
        },
        {
          seats: numberOfSeatsQuery(),
        },
        {
          equipment: optionalEquipmentQuery(),
        },
        {
          exteriorColor: exteriorColorQuery(),
        },
        {
          interiorColor: interiorColorQuery(),
        },
        {
          upholstery: upholsteryQuery(),
        },
      ],
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
