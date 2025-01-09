const { signupService, loginService } = require('../services/authService');

//signup
const signup = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const { status, message} =await signupService(username, email, password);
    return res.status(status).json({message});
  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

//login
const login = async (req,res) => {
  try {
    const {email, password} = req.body;
    const {status, message, token, user} = await loginService(email, password);
    return res.status(status).json({message, token, user })
  } catch (error) {
    res.status(500).json({message: "Something went wrong. Please try again later!"})
  }
}

module.exports = {
  signup,
  login
}