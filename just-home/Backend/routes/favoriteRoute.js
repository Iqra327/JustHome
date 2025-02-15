const router = require('express').Router();
const { addToFavorites, removeFromFavorites, getAllFavorites } = require('../controllers/favoritesController');
const { verifyUser } = require('../middlewares/auth');

//route for adding favorite property
router.post('/favorites/:propertyId', verifyUser, addToFavorites);

//route for removing property from favorites
router.delete('/favorites/:propertyId', verifyUser, removeFromFavorites);

//route for getting favorite properties
router.get('/favorites', verifyUser, getAllFavorites);

module.exports = router;