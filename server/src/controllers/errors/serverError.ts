// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).send({
    status,
    message,
  });
};

export default serverError;
