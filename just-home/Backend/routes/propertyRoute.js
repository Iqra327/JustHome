const router = require('express').Router();
const {createProperty, getAllProperties, deleteProperty} = require('../controllers/propertyController');
const {verifyAdmin} = require('../middlewares/auth');
const upload = require('../middlewares/multer');
const { route } = require('./authRoute');

//route for creating new property
router.post('/createProperty', verifyAdmin, upload.array('images'), createProperty);

// route for getting all properties
router.get('/allProperties', getAllProperties);

//route for deleting property
router.delete('/properties/:id', deleteProperty);

module.exports = router;