import { Request, Response } from 'express';
import { generateJwtToken } from '../../config/generateJWT-token';
import AdminSchema from '../../models/admin.model';
import { loginAdminSchema } from '../../zod/admin';
import * as bcrypt from 'bcrypt';

export const loginAdminAccount = async (
  req: Request,
  res: Response
): Promise<string | any> => {
  const payload = req.body;
  const adminData = loginAdminSchema.safeParse(payload);

  if (!adminData.success) {
    return res.status(400).json({
      success: false,
      message: 'Bad request - Invalid payload',
    });
  }

  try {
    const { email, password } = adminData.data;

    const isAdminExist = await AdminSchema.findOne({ email });
    if (!isAdminExist) {
      return res.status(404).json({
        success: false,
        message: 'Admin not found',
      });
    }

    if (isAdminExist.isActive === false) {
      return res.status(401).json({
        success: false,
        message: 'Your Account Has beeen Deactivated',
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isAdminExist.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const token = generateJwtToken(
      isAdminExist._id as string,
      isAdminExist.email
    );

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error in loginAdminAccount:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error: loginAdminAccount',
    });
  }
};
