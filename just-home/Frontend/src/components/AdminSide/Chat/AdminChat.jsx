import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const AdminChat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [replyMessage, setReplyMessage] = useState('');
  const [currentRoom, setCurrentRoom] = useState(null);
  const adminToken = useSelector((state) => state.auth.token);
  console.log('Admin token:', adminToken); 

  useEffect(() => {
    const socketConnection = io.connect('http://localhost:5000', {
      query: { token: adminToken },
    });

    setSocket(socketConnection);

    // Listen for new messages from the user
    socketConnection.on('newMessage', (data) => {
      const { id, sender , message } = data;
      setMessages((prevMessages) => [...prevMessages, { sender: sender, message }]);
      setCurrentRoom(`room:${id}`);
    });

    return () => {
      console.log('Disconnecting from socket');
      socketConnection.disconnect();
    };
  }, [adminToken]);

  // Handle sending reply to user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (socket && replyMessage && currentRoom) {
      socket.emit('adminReply', { roomId: currentRoom, message: replyMessage });

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', message: replyMessage },
      ]);
      setReplyMessage('');
    } else {
      console.log('Failed to send message. Ensure socket is connected, message is not empty, and room is set.');
    }
  };

  console.log(messages);

  return (
    <div className='flex flex-col justify-center w-full max-w-4xl mx-auto mt-16 shadow-md border rounded-lg overflow-hidden'>
      
      {/* Chat header */}
      <div className="border-b p-3 text-2xl tracking-wide text-center text-white bg-gradient-to-b from-stone-600 to-teal-800">
        <h1>Chat With User</h1>
      </div>

      {/* Chat body */}
      <div className="bg-gray-50 p-3 h-full max-h-[500px] min-h-[500px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${
              msg.sender === "You" ? "text-right" : "text-left"
            }`}
          >
            <p
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === "You"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.message}
            </p>
          </div>
        ))}
      </div>

      {/* Chat footer */}
      <div className="bg-gray-100 border-t">
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Start Typing...'
            className='w-full p-3 focus:ring-2 focus:ring-blue-300 outline-none text-lg border-gray-300'
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
          />
          <button className="p-3 px-4 bg--500 hover:bg-blue-600 text-white rounded-r-lg transition-colors duration-150 bg-sky-500" type="submit">
            <IoMdSend size={25} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminChat;
