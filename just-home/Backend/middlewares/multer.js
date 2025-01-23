const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9]/g, '_')}${ext}`;
    cb(null, uniqueName);
    console.log('file',file);
    console.log('unique-name',uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();
  if(!allowedExtensions.includes(ext)){
    return cb(new Error('Only images with specific extensions like .jpg, .jpeg, .png are allowed!'), false);
  }
  cb(null, true);
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, //file size limit is set to 5 mB
  } 
});

module.exports = upload;