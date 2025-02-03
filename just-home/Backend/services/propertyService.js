const Property = require("../models/property");
const Amenity = require("../models/amenity");
const { uploadImage } = require("../utils/uploadImage");
const fs = require('fs');

//new property creation service
const createPropertyService = async (propertyData) => {

  try {
    //finding property amenities in the amenity model
    const amenitiesDetails = await Amenity.find({
      '_id': {$in : propertyData.amenities}
    })

    const uploadedImages = await uploadImage(propertyData.images);

    const images = uploadedImages.map(image => ({
      secure_url: image.secure_url,
      public_id: image.public_id,
    }));

    //unlinking all images one by one from file system
    for (const imagePath of propertyData.images) {
      fs.unlinkSync(imagePath);  
    } 

    const fullPropertyData = {
      ...propertyData,
      amenities: amenitiesDetails,
      images: images.map(image => image.secure_url),
      imagesId: images.map(image => image.public_id)
    };

    const newProperty = new Property(fullPropertyData);
    await newProperty.save();
    console.log(newProperty);
    return {
      status: 201,
      message: "Property created successfully!",
    };
  } catch (error) {
    throw error
  }
}

//getting all properties service
const getAllPropertiesService = async () => {
  try {
    const properties = await Property.find().populate("amenities");
    return {
      status: 200,
      message: "Properties fetched successfully!",
      properties
    } 
  } catch (error) {
    throw error
  }
}

//delete property service
const deletePropertyService = async (id) => {
  try {
    const property = await Property.findById(id);

    if (!property) {
      return {
        status: 404,
        message: "Property not found!"
      };
    }

    if (property.imagesId && property.imagesId.length > 0) {
      await Promise.all(property.imagesId.map((imagesId) => deleteImageFromCloudinary(imagesId)));
    }

    await Property.findByIdAndDelete(id);

    return {
      status: 200,
      message: "Property deleted successfully!"
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPropertyService,
  getAllPropertiesService,
  deletePropertyService
}