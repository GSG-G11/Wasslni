import { editPasswordDB, getUserById } from '../../database/queries';
import { comparePassword, editPasswordSchema, hashPassword } from '../../utils';

const editPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req;
  await editPasswordSchema.validateAsync(req.body);
  const { rows } = await getUserById(id);
  const { password } = rows[0];
  if (newPassword === password) {
    return res.status(400).json({ message: 'new password is similar with old one' });
  }
  const isMatch = await comparePassword(oldPassword, password);
  if (!isMatch) {
    return res.status(400).json({ message: 'wrong password !' });
  }
  const hashedNewPassword = await hashPassword(newPassword);
  await editPasswordDB({ hashedNewPassword, id });
  return res.status(200).json({ message: 'password edited' });
};
export default editPassword;
