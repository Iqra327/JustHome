const multer = require('multer');

// multer error handler
const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(500).json({ message: err.message });
  }
  next(err)
};

module.exports = multerErrorHandler;