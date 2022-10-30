import { Request, Response } from 'express';

const authorizationController = (req: Request, res: Response) => {
  console.log('//////////////////////');
  console.log(req.session);
  console.log('//////////////////////');

  res.send({
    ok: 'ok',
  });
};

export default authorizationController;
