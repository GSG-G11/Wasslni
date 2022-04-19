/* eslint-disable no-unused-vars */
const clientError = (req: any, res: any, next: any) => {
  res.status(404).json({ message: 'Page Not Found' });
};

export default clientError;
