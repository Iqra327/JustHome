const router = require('express').Router();
const {createProperty, getAllProperties, deleteProperty, getSingleProperty} = require('../controllers/propertyController');
const {verifyAdmin} = require('../middlewares/auth');
const upload = require('../middlewares/multer');

//route for creating new property
router.post('/createProperty', verifyAdmin, upload.array('images'), createProperty);

// route for getting all properties
router.get('/allProperties', getAllProperties);

//route for deleting property
router.delete('/properties/:id', deleteProperty);

//route for getting single property
router.get('/singleProperty/:id', getSingleProperty);

module.exports = router;