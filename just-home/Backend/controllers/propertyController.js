const {createPropertyService} = require('../services/propertyService');

// create property controller
const createProperty = async (req, res) => {
  try {
    const {name, description, price, address, locationURL,images, area, beds, baths, bedrooms } = req.body;
    const {status, message} = await createPropertyService({
      name, 
      description, 
      price, 
      address, 
      locationURL,
      images, 
      area, 
      beds, 
      baths, 
      bedrooms
    });
    return res.status(status).json({message});
  } catch (error) {
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

//getting single property by id controller
// const getPropertyById = async (req, res) => {

// }

module.exports = {
  createProperty
}