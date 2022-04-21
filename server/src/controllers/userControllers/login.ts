import {
  loginSchema, CustomError, comparePassword, createToken,
} from '../../utils';
import { checkPhoneNumber } from '../../database/queries';

const login = async (req, res, next) => {
  const { phoneNumber, password } = req.body;
  try {
    await loginSchema.validateAsync(req.body);
    const { rows, rowCount } = await checkPhoneNumber(phoneNumber);
    if (!rowCount) {
      throw CustomError('your phone number was not found, you must sign up', 400);
    } else {
      const hashedPassword = rows[0].password;
      const { id, role } = rows[0];
      const isMatch = await comparePassword(password, hashedPassword);
      if (isMatch) {
        const token = await createToken({ id, role });
        return res.cookie('token', token, {
          httpOnly: true,
        }).json({ message: 'login successfully', status: 200 });
      }
      throw CustomError('phone number or password wrong', 404);
    }
  } catch (error) {
    if (error.details) {
      next(CustomError(error.details[0].message, 400));
    }
    return next(error);
  }
};

export default login;
