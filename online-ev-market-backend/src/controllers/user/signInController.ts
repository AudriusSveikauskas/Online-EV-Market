import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import UserModel from '../../models/userModel';

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

    await UserModel.findByIdAndUpdate(user._id, {
      accessToken,
    });
    res.status(200).json({
      data: {
        email: user.email,
        role: user.role,
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);
  }
};

export default signInController;
