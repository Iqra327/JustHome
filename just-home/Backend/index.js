const express = require('express');
const http = require('http');
const auth = require('./routes/authRoute');
const contact = require('./routes/contactRoute');
const connectDb = require('./utils/database');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;
const {Server} = require('socket.io');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/socket.io', (req, res) => {
//   res.send('Socket.io is active');
// });


//create http server
const server = http.createServer(app);

// socket.io initialization
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});

io.use((socket, next) => {
  const token = socket.handshake.query.token;
  if (!token) {
    return next(new Error("Authentication Error: Token Missing"));
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    socket.user = decoded;
    next();
  } catch (error) {
    return next(new Error("Authentication Error: Invalid token"));
  }
});

io.on("connection", (socket) => {

  const user = socket.user;
  if (!user) {
    console.log("No user data found on socket. Possible authentication issue.");
    return;
  }

  console.log("User data from socket:", user);

  if (user.role === 'admin') {
    console.log("User is admin. Joining admin-room.");
    socket.join('admin-room');
  } else {
    const roomId = `room:${user.id}`;
    console.log(`User is not admin. Joining user-specific room: ${roomId}`);
    socket.join(roomId);
  }

  socket.on('chatMessage', (message) => {
    console.log(`Received chat message from user ${user.id}: ${message}`);
    if (user.role !== 'admin') {
      socket.broadcast.to('admin-room').emit('newMessage', { sender: user.username, id:user.id, message });
    }
  });

  socket.on('adminReply', (data) => {
    const { roomId, message } = data;
    console.log(`Admin reply: Sending message to room ${roomId}: ${message}`);
    io.to(roomId).emit('newMessage', { sender: 'Owner', message });
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${user.id}`);
  });
});


//routes
app.use('/api/v1', auth);
app.use('/api/v1', contact);

connectDb().then(() => {
  server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})