import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import UserModel from '../../models/userModel';
import responseMessage from '../../helpers/responseMessage';

const signInController = async (req: Request, res: Response) => {
  const { user } = req.body;

  try {
    const secret = process.env.JWT_SECRET;
    const accessToken = jwt.sign(
      {
        userId: user._id,
      },
      secret as Secret,
      {
        expiresIn: '1h',
      },
    );

    await UserModel.findByIdAndUpdate(user._id.toString(), {
      accessToken,
    });

    req.session.user = {
      _id: user._id.toString(),
      accessToken,
      role: user.role,
    };

    return res.status(200).json({
      payload: {
        role: user.role,
      },
      accessToken,
    });
  } catch (error) {
    return res
      .status(500)
      .send(
        responseMessage(500, `${error}. Please contact site administrator.`),
      );
  }
};

export default signInController;
