const router = require('express').Router();
const {signup, login} = require('../controllers/authController');

//for auth, there is obviously signup or login, so create routes for them, for signup or login user will send data from frontend? then for it create a post request
router.post('/signup', signup);

router.post('/login', login);

module.exports = router;