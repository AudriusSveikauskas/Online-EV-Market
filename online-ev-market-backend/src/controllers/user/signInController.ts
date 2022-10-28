import { Request, Response } from 'express';

const signInController = (req: Request, res: Response) => {
  console.log(req.body);

  res.status(200).send({
    ok: 'OK',
  });
};

export default signInController;
