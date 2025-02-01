const router = require('express').Router();
const {createProperty} = require('../controllers/propertyController');
const {verifyAdmin} = require('../middlewares/auth');

//route for creating new property
router.post('/createProperty', verifyAdmin, createProperty);

//route for getting single property
// router.get('/:propertyId', verifyAdmin, getPropertyById);


module.exports = router;