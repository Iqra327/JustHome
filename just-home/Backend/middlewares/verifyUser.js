const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if(!token){
    res.status(401).json({message: 'Access denied.'})
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    console.log('Decoded User ID:', req.user?.id);
    next();
  } catch (error) {
    res.status(403).json({message: 'Invalid token'});
  }
}

module.exports = verifyUser;