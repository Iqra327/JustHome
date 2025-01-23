const { updatePassword, updateProfile, removeProfile } = require('../controllers/userController');
const router = require('express').Router();
const verifyUser = require('../middlewares/verifyUser');
const upload = require('../middlewares/multer');

//route for updating password
router.patch('/updatePassword/:userId', verifyUser, updatePassword);

//route for updating profile picture
router.patch('/updateProfile/:userId', verifyUser, upload.single('image'), updateProfile);

//route for deleting profile picture
router.delete('/removeProfile/:userId', verifyUser, removeProfile);

module.exports = router;