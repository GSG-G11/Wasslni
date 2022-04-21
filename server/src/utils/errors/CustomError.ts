const CustomError = (message: string, status: number):void => {
  // const error = new Error(message);
  const customError:any = { message, status };

  return customError;
};

export default CustomError;
