import { loginSchema, comparePassword, createToken } from '../../utils';
import { checkPhoneNumber } from '../../database/queries';

const login = async (req, res) => {
  const { phoneNumber, password } = req.body;
  await loginSchema.validateAsync(req.body);
  const { rows, rowCount } = await checkPhoneNumber(phoneNumber);
  if (!rowCount) {
    return res.status(400).json({ message: 'your phone number was not found, you must sign up' });
  }
  const hashedPassword = rows[0].password;
  const { id, role } = rows[0];
  const isMatch: any = await comparePassword(password, hashedPassword);
  if (!isMatch) {
    return res.status(400).json({ message: 'phone number or password wrong' });
  }

  const token = await createToken({ id, role });
  return res
    .status(201)
    .cookie('token', token, {
      httpOnly: true,
    })
    .json({ message: 'login successfully' });
};

export default login;
