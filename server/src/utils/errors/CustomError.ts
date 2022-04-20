const CustomError = (message: string, status: number) => {
  const error = new Error(message);
  const customError = { ...error, status };

  return customError;
};

export default CustomError;
