const Amenity = require("../models/amenity");
const { uploadImage, deleteImageFromCloudinary } = require("../utils/uploadImage");
const fs = require('fs');

//create new amenity service
const createAmenityService = async (name, iconURL) => {

  try {
    if (!name || !iconURL) {
      return {
        status: 400,
        message: "Name and iconURL are required"
      };
    }

    const lowerCaseName = name.toLowerCase();

    const existingAmenity = await Amenity.findOne({
      name: { $regex: new RegExp(`^${lowerCaseName}$`, 'i') }
    });
    if(existingAmenity){
      return {
        status: 409,
        message: "Amenity aleardy exists. Create new one!"
      }
    }

    //uploading amenity icon to coudinary
    const {secure_url, public_id} = await uploadImage(iconURL);

    fs.unlinkSync(iconURL);

    const newAmenity = new Amenity({
      name,
      iconURL : secure_url,
      iconId: public_id
    });
    await newAmenity.save();
    console.log('okay saved');
    return {
      status: 201,
      message: "Amenity created successfully!"
    }
  } catch (error) {
    throw error;
  }
}

//get all amenties service
const getAllAmenitiesService = async () => {
  try {
    const amenities = await Amenity.find();
    return {
      status: 200,
      message: "Amenities fetched successfully",
      amenities
    }
  } catch (error) {
    throw error
  }
}

//delete amenity service
const deleteAmenityService = async (id, iconId) => {
  try {
    const amenity = await Amenity.findByIdAndDelete(id);
    if (!amenity) {
      return {
        status: 404,
        message: "Amenity not found!"
      };
    }

    if(iconId){
      await deleteImageFromCloudinary(iconId);
    }
  
    return {
      status: 200,
      message: "Amenity deleted successfully!"
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAmenityService,
  getAllAmenitiesService,
  deleteAmenityService
}