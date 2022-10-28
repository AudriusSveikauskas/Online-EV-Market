import { Request, Response } from 'express';

const signUpController = (req: Request, res: Response) => {
  console.log(req.body);

  res.status(200).send({
    ok: 'signUpController',
  });
};

export default signUpController;
