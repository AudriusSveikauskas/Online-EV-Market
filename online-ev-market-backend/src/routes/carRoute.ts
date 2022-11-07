import express from 'express';
import addCarController from '../controllers/car/addCarController';
import isNumberValidator from '../middleware/car/isNumberValidator';
import requiredValidator from '../middleware/car/requiredValidator';
import getCarsController from '../controllers/car/getCarsController';
import getCarDetailsController from '../controllers/car/getCarDetailsController';
import filterCarsController from '../controllers/car/filterCarsController';

const carRoute = express.Router();

carRoute.get('/cars', getCarsController);
carRoute.get('/car/:_id', getCarDetailsController);

carRoute.post('/cars', requiredValidator, isNumberValidator, addCarController);

carRoute.post('/filter-cars', filterCarsController);

export default carRoute;
