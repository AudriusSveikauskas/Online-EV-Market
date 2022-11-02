import express from 'express';
import equipmentDuplicateValidator from '../middleware/equipment/equipmentDuplicateValidator';
import addEquipmentController from '../controllers/filter/optional-equipment/addEquipmentController';
import getEquipmentController from '../controllers/filter/optional-equipment/getEquipmentController';
import tokenValidator from '../middleware/auth/tokenValidator';
import roleValidator from '../middleware/auth/roleValidator';
import equipmentValidator from '../middleware/equipment/equipmentValidator';
import deleteEquipmentController from '../controllers/filter/optional-equipment/deleteEquipmentController';

const equipmentRoute = express.Router();

equipmentRoute.get('/equipment', getEquipmentController);

equipmentRoute.post(
  '/equipment',
  equipmentDuplicateValidator,
  addEquipmentController,
);

equipmentRoute.get(
  '/equipment/delete/:_id',
  tokenValidator,
  roleValidator,
  equipmentValidator,
  deleteEquipmentController,
);

export default equipmentRoute;
