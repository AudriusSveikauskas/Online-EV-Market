import express from 'express';
import userRoute from './userRoute';
import brandRoute from './brandRoute';
import modelRoute from './modelRoute';
import equipmentRoute from './equipmentRoute';
import carRoute from './carRoute';

const router = express.Router();

router.use(userRoute);
router.use(brandRoute);
router.use(modelRoute);
router.use(equipmentRoute);
router.use(carRoute);

export default router;
