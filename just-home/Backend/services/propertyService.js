const Property = require("../models/property")

//new property creation service
const createPropertyService = async (propertyData) => {

  try {
    const newProperty = new Property(propertyData);
    await newProperty.save();

    return {
      status: 201,
      message: "Property created successfully!",
      property: newProperty
    };
  } catch (error) {
    throw error
  }
}

//delete property service

module.exports = {
  createPropertyService
}