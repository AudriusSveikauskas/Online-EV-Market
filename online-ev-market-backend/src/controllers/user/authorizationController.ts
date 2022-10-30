import { Request, Response } from 'express';
import responseMessage from '../../helpers/responseMessage';

const authorizationController = (req: Request, res: Response) => {
  res.status(200).send(responseMessage(200, 'Success'));
};

export default authorizationController;
