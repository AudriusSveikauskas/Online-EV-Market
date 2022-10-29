import bcrypt from 'bcrypt';

const validatePassword = async (
  plainPassword: string,
  hashedPassword: string,
) => await bcrypt.compare(plainPassword, hashedPassword);

export default validatePassword;
