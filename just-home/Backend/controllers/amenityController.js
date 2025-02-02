const { getAllAmenitiesService } = require("../services/amenityService");
const { createAmenityService, deleteAmenityService } = require("../services/amenityService");

//create new amenity controller
const createAmenity = async (req, res) => {
  try {
    const {name} = req.body;
    const iconURL = req.file ? req.file.path : null;
    const {status, message} = await createAmenityService(name, iconURL);
    return res.status(status).json({message});
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Please try again later!"});
  }
}

//get all amenities controller
const getAllAmenities = async (req, res) => {
  try {
    const {status, message, amenities} = await getAllAmenitiesService();
    return res.status(status).json({message, amenities});
  } catch (error) {
    return res.status(500).json({message: "Failed to fetch amenities!"});
  }
}

//delete amenity controller
const deleteAmenity = async (req, res) => {
  try {
    const {id} = req.params;
    const {iconId} = req.body;
    const {status, message} = await deleteAmenityService(id, iconId);
    return res.status(status).json({message});
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Please try again later!"});
  }
}

module.exports = {
  createAmenity,
  getAllAmenities,
  deleteAmenity
}