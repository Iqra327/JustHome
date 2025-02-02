const router = require('express').Router();
const { createAmenity, deleteAmenity, getAllAmenities } = require('../controllers/amenityController');
const { verifyAdmin } = require('../middlewares/auth');
const upload = require('../middlewares/multer');

//post amenity route
router.post('/createAmenity', verifyAdmin, upload.single('iconURL'), createAmenity);

//get all amenities route
router.get('/allAmenities', getAllAmenities);

//delete single amenity route
router.delete('/amenities/:id', deleteAmenity);

module.exports = router;