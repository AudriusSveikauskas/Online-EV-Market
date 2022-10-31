import express from 'express';
import userRoute from './userRoute';
import filterRouter from './filterRouter';

const router = express.Router();

router.use(userRoute);
router.use(filterRouter);

export default router;
