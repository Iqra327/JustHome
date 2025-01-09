const contactService = require('../services/contactService');

const contact = async (req, res) => {
  try {
    const {name, email, message} = req.body;
    const {status, msg} = await contactService(name, email, message);
    return res.status(status).json({msg});
  } catch (error) {
    return res.status(500).json({message: "Something went wrong. Please try again later"})
  }
}

module.exports = contact;