const { signupService, loginService } = require('../services/authService');

//signup
const signup = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const { status, message, data } = await signupService(username, email, password);
    return res.status(status).json({message});
  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).json({message: "Internal server error"})
  }
}

//login
const login = async (req,res) => {
  try {
    const {email, password} = req.body;
    const {status, message, token} = await loginService(email, password);
    return res.status(status).json({message, token})
  } catch (error) {
    res.status(500).json({message: "Internal server error"})
  }
}

module.exports = {
  signup,
  login
}