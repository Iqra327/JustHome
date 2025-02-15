const {createPropertyService, getAllPropertiesService, deletePropertyService, getSinglePropertyService} = require('../services/propertyService');

// create property controller
const createProperty = async (req, res) => {
  try {
    const {name, description, price, address, locationURL, area, beds, baths, bedrooms, amenities } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];
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
      bedrooms,
      amenities
    });
    return res.status(status).json({message});
  } catch (error) {
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

//getting all properties controller
const getAllProperties = async (req, res) => {
  try {
    const {status, message, properties} = await getAllPropertiesService();
    return res.status(status).json({message, properties});
  } catch (error) {
    res.status(500).json({message: "Failed to fetch properties."})
  }
}

//deleting property controller
const deleteProperty = async (req, res) => {
  try {
    const {id} = req.params;
    const {status, message} = await deletePropertyService(id);
    return res.status(status).json({message});
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Please try again!"});
  }
}

//get single property controller
const getSingleProperty = async (req, res) => {
  try {
    const {id} = req.params;
    const {status, property} = await getSinglePropertyService(id);
    return res.status(status).json({property}); 
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Please try again!"})
  }
}

module.exports = {
  createProperty,
  getAllProperties,
  deleteProperty,
  getSingleProperty
}