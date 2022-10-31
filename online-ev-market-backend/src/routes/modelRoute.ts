import express from 'express';
import getModelsController from '../controllers/filter/model/getModelsController';
import addModelController from '../controllers/filter/model/addModelController';
import brandValidator from '../middleware/brand/brandValidator';
import tokenValidator from '../middleware/auth/tokenValidator';
import roleValidator from '../middleware/auth/roleValidator';
import deleteModelController from '../controllers/filter/model/deleteModelController';
import modelDuplicateValidator from '../middleware/model/modelDuplicateValidator';
import modelValidator from '../middleware/model/modelValidator';

const modelRoute = express.Router();

modelRoute.get('/models/:_id', brandValidator, getModelsController);

modelRoute.post(
  '/models',
  tokenValidator,
  roleValidator,
  modelDuplicateValidator,
  addModelController,
);

modelRoute.get(
  '/models/delete/:_id',
  tokenValidator,
  roleValidator,
  modelValidator,
  deleteModelController,
);

export default modelRoute;
