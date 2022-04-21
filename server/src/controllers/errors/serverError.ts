// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err.details) {
    return res.status(400).json({ message: err.details[0].message });
  }
  return res.status(500).json({ message: 'internal server error ' });
};

export default serverError;
