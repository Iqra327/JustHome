const {Server} = require('socket.io');
const jwt = require('jsonwebtoken');

const socketHandler = (server) => {
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
  
}

module.exports = socketHandler;