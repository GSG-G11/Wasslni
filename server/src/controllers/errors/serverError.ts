// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err.details) {
    return res.status(400).json({ message: err.details[0].message });
  }
  if (err.status === 404) {
    return res.status(503).json({ message: 'twilio can not send code .' });
  } if (err.message === 'cloudinary error') {
    return res.status(503).json({ message: 'cloudinary can not upload photo' });
  }
  return res.status(500).json({ message: 'internal server error ' });
};

export default serverError;
