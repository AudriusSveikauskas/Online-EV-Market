import express from 'express';
import userRoute from './userRoute';
import brandRoute from './brandRoute';
import modelRoute from './modelRoute';

const router = express.Router();

router.use(userRoute);
router.use(brandRoute);
router.use(modelRoute);

export default router;
