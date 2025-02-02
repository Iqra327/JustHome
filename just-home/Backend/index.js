const express = require('express');
const http = require('http');
const auth = require('./routes/authRoute');
const contact = require('./routes/contactRoute');
const user = require('./routes/userRoute');
const property = require('./routes/propertyRoute');
const amenity = require('./routes/amenityRoute');
const connectDb = require('./utils/database');
const socketHandler = require('./utils/socket');
const multerErrorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//create http server
const server = http.createServer(app);

socketHandler(server);

//routes
app.use('/api/v1', auth);
app.use('/api/v1', contact);
app.use('/api/v1', user);
app.use('/api/v1', property);
app.use('/api/v1', amenity);

//middlerware
app.use(multerErrorHandler);

connectDb().then(() => {
  server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})