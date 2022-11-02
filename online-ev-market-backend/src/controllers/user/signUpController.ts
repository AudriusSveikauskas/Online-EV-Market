import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import responseMessage from '../../helpers/responseMessage';
import hashPassword from '../../helpers/auth/hashPassword';
import UserModel from '../../models/UserModel';

const signUpController = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const secret = process.env.JWT_SECRET;
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: 'user',
    });
    const accessToken = jwt.sign(
      {
        userId: newUser._id,
      },
      secret as Secret,
      {
        expiresIn: '1h',
      },
    );
    newUser.accessToken = accessToken;
    await newUser.save();

    return res.status(200).send(
      responseMessage(
        200,
        'Thank you for signing up! Now you can sign into your account.',
        [
          {
            role: newUser.role,
            accessToken,
          },
        ],
      ),
    );
  } catch (error) {
    return res
      .status(500)
      .send(
        responseMessage(500, `${error}. Please contact site administrator.`),
      );
  }
};

export default signUpController;
