const { updateUser } = require('../controllers/userController');
const router = require('express').Router();
const verifyUser = require('../middlewares/verifyUser');
const upload = require('../middlewares/upload');

//update profile route , done checking through postman
router.patch('/updateUser/:userId', verifyUser, upload.single('profileImg'), updateUser);

module.exports = router;