const updateUserService = require('../services/userService');

const updateUser = async (req, res) => {
  try {
    const {id} = req.user;
    const {paramsId} = req.params;
    const {newPassword} = req.body;
    const {status, message} = await updateUserService(id, paramsId, newPassword);
    return res.status(status).json({message}) 
  } catch (error) {
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

module.exports = {
  updateUser
}