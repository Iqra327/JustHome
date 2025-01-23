const { updatePasswordService, updateProfileService, removeProfileService } = require('../services/userService');

//includes updating password controller
const updatePassword = async (req, res) => {
  try {
    const {id} = req.user;
    const {userId} = req.params;
    const {newPassword} = req.body;
    console.log('controller', newPassword);
    const {status, message} = await updatePasswordService(id, userId, newPassword);
    return res.status(status).json({message}); 
  } catch (error) {
    console.error("Error occurred:", error); 
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

// update profile picture controller
const updateProfile = async (req, res) => {
  try {
    const {id} = req.user;
    const {userId} = req.params;
    const {avatarId} = req.body;
    const image = req.file ? req.file.path : null;
    const {status, message, user} = await updateProfileService(id, userId, image, avatarId);
    res.status(status).json({message, user}); 
  } catch (error) {
    console.error('Error in update profile controller:', error);
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

//remove profile picture controller
const removeProfile = async (req, res) => {
  try {
    const {id} = req.user;
    const {userId} = req.params;
    const {avatarId} = req.body;
    const {status, message} = await removeProfileService(id, userId, avatarId);
    res.status(status).json({message});
  } catch (error) {
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

module.exports = {
  updatePassword,
  updateProfile,
  removeProfile
}