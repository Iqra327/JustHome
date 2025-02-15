const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if(!token){
    return res.status(401).json({message: 'Access denied. Login first!'})
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    console.log('Decoded User ID:', req.user?.id);
    next();
  } catch (error) {
    return res.status(403).json({message: 'Invalid token'});
  }
}

const verifyAdmin = (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }
    next();
  });
};

module.exports =  {
  verifyUser,
  verifyAdmin
};