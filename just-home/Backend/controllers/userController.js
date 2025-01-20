const updateUserService = require('../services/userService');

const updateUser = async (req, res) => {
  try {
    const {id} = req.user;
    const {userId} = req.params;
    const {newPassword} = req.body;
    const profileImg =  req.file ? req.file.path : null;
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);
   
    console.log("New password:", newPassword);
    console.log("Avatar path:", profileImg);
    const {status, message, avatar} = await updateUserService(id, userId, newPassword, profileImg);
    console.log(avatar);
    return res.status(status).json({message, avatar}) 
  } catch (error) {
    console.error("Error occurred:", error); 
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

module.exports = {
  updateUser
}