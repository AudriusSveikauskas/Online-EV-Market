import express from 'express';
import getBrandsController from '../controllers/filter/brand/getBrandsController';
import modelsController from '../controllers/filter/model/modelsController';
import addModelController from '../controllers/filter/model/addModelController';
import addBrandController from '../controllers/filter/brand/addBrandController';
import deleteBrandController from '../controllers/filter/brand/deleteBrandController';
import brandValidator from '../middleware/brand/brandValidator';
import tokenValidator from '../middleware/auth/tokenValidator';
import roleValidator from '../middleware/auth/roleValidator';
import brandDuplicateValidator from '../middleware/brand/brandDuplicateValidator';

const filterRoute = express.Router();

filterRoute.get('/brands', getBrandsController);
filterRoute.post(
  '/brands',
  tokenValidator,
  roleValidator,
  brandDuplicateValidator,
  addBrandController,
);
filterRoute.get(
  '/brands/delete/:_id',
  tokenValidator,
  roleValidator,
  brandValidator,
  deleteBrandController,
);

filterRoute.get('/models', modelsController);
filterRoute.post('/models', addModelController);

export default filterRoute;
