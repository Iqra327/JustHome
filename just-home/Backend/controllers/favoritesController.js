const { addToFavoritesService, removeFromFavoritesService, getAllFavoritesService } = require("../services/favoritesService");

//adding property to favorites controller
const addToFavorites = async (req, res) => {
  try {
    const {id} = req.user;
    const {propertyId} = req.params;
    const {status, message} = await addToFavoritesService(id, propertyId);
    return res.status(status).json({message}); 
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

//removing property from favorites controller
const removeFromFavorites = async (req, res) => {
  try {
    const {id} = req.user;
    const {propertyId} = req.params;
    const {status, message} = await removeFromFavoritesService(id, propertyId);
    return res.status(status).json({message});
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Please try again later!"});
  }
}

//getting all favorite properties controller
const getAllFavorites = async (req, res) => {
  try {
    const {id} = req.user;
    const {status, favorites} = await getAllFavoritesService(id);
    return res.status(status).json({favorites}); 
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Error in fetching favorite properties!"});
  }
}

module.exports = {
  addToFavorites,
  removeFromFavorites,
  getAllFavorites
}