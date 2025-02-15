const User = require('../models/user');

//service for adding property to favorites
const addToFavoritesService = async (id, propertyId) => {
  try {
    const user = await User.findById(id);
    if(!user){
      return {
        status: 404,
        message: 'You must be logged in!'
      }
    }
  
    if(!Array.isArray(user.favorites)){
      user.favorites = []
    }

    if(!user.favorites.includes(propertyId)){
      user.favorites.push(propertyId);
      await user.save();
    }
  
    return {
      status: 200,
      message: "Property added to favorites"
    } 
  } catch (error) {
    throw error
  }
}

//service for deleting property from favorites
const removeFromFavoritesService = async (id, propertyId) => {
  console.log(id, propertyId)
  try {
    const user = await User.findById(id);
    if(!user){
      return{
        status: 404,
        message: "User not found"
      }
    }
    console.log(user);

    user.favorites = user.favorites.filter(id => id && id.toString() !== propertyId);
    console.log(user.favorites);
    await user.save();
    return{
      status: 200,
      message: "Property removed from favorites."
    }
  } catch (error) {
    throw error
  }
}

//service for getting all favorties properties
const getAllFavoritesService = async (id) => {
  try {
    const user = await User.findById(id).populate('favorites');
  
    if(!user){
      return{
        status: 404,
        message: "User not found"
      }
    }
  
    return {
      status: 200,
      favorites: user.favorites
    } 
  } catch (error) {
    throw error
  }
}

module.exports = {
  addToFavoritesService,
  removeFromFavoritesService,
  getAllFavoritesService
}