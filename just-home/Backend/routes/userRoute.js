const { updateUser } = require('../controllers/userController');
const router = require('express').Router();
const verifyUser = require('../middlewares/verifyUser')

//update profile route , done checking through postman
router.patch('/updateUser/:paramsId', verifyUser, updateUser);

module.exports = router;