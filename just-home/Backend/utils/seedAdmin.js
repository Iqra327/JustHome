const bcrypt = require('bcrypt');
const User = require('../models/user');
const connectDb = require('./database');

const seedAdmin = async () => {
  try {
    
    await connectDb();

    //checking if admin already exists
    const existingAdmin = await User.findOne({role : 'admin'});
    if(existingAdmin){
      console.log('Admin already exist');
      return;
    }

    // creating new admin user
    const hashedPassword = await bcrypt.hash('admin@pass123', 10)
    const admin = new User({
      username: 'Admin',
      email: 'admin@gmail.com',
      password: hashedPassword,
      role: 'admin'
    })
    
    await admin.save();
    console.log('Admin created successfully!');

  } catch (error) {
    console.error('Error creating a admin user', error);    
  }
}

seedAdmin();