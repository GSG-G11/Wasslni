import bcrypt from 'bcryptjs';

const hashPassword = (password) => bcrypt.hash(password, 10);
export default hashPassword;
