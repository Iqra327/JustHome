import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { io } from 'socket.io-client';
import { useSelector } from "react-redux";

const UserChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const userToken = useSelector((state) => state.auth.token);

  console.log('User Token:', userToken);
  
  useEffect(() => {
    const socketConnection = io.connect('http://localhost:5000', {
      query: { token: userToken } 
    });

    setSocket(socketConnection);

    // Listen for new messages from server (admin)
    socketConnection.on('newMessage', (data) => {
      console.log('Received new message:', data); 
      setMessages((prevMessages) => [...prevMessages, { sender: data.sender, message: data.message }]);
    });

    return () => {
      console.log('Disconnecting from socket');
      socketConnection.disconnect();
    }
  }, [userToken]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (socket && message) {
      console.log('Sending message:', message);
      socket.emit('chatMessage',message );
      setMessages((prevMessages) => [...prevMessages, { sender: 'You', message }]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col justify-center w-full max-w-4xl mx-auto mt-16 shadow-md border rounded-lg overflow-hidden">
    
      {/* Chat header */}
      <div className="border-b p-3 text-2xl tracking-wide text-center text-white bg-gradient-to-b from-stone-600 to-teal-800">
        <h1>Chat With Owner</h1>
      </div>

      {/* Chat body */}
      <div className="bg-gray-50 p-3 h-full max-h-[500px] min-h-[500px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${
              msg.sender === "Owner" ? "text-left" : "text-right"
            }`}
          >
            <p
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === "Owner"
                  ? "bg-green-100 text-green-600"
                  : "bg-blue-100 text-blue-600"
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
            type="text"
            placeholder="Start Typing..."
            className="w-full p-3 focus:ring-2 focus:ring-blue-300 outline-none text-lg border-gray-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="p-3 px-4 bg--500 hover:bg-blue-600 text-white rounded-r-lg transition-colors duration-150 bg-sky-500"
            type="submit"
          >
            <IoMdSend size={25} className=""/>
          </button>
        </form>
      </div>
    </div>

  );
};

export default UserChat;
