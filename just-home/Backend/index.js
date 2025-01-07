const express = require('express');
const auth = require('./routes/authRoute');
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

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})