const express = require('express');
const auth = require('./routes/authRoute');
const contact = require('./routes/contactRoute');
const connectDb = require('./utils/database');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

//routes
app.use('/api/v1', auth);
app.use('/api/v1', contact);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})