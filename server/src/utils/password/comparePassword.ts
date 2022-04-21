import bcrypt from 'bcryptjs';

const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

export default comparePassword;
