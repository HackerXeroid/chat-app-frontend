import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { io } from "socket.io-client";

import ChatBox from "./ChatBox";

const socket = io.connect("https://chat-app-backend-izu9.onrender.com");

const ChatRoom = (props) => {
  const [chats, setChats] = useState([]);
  const [chatRooms, setChatRooms] = useState([
    {
      roomNo: 1,
      name: "Room 1",
    },
  ]);
  const [newChat, setNewChat] = useState("");
  const [activeRoom, setActiveRoom] = useState(1);

  const joinRoom = () => {
    if (activeRoom !== "") {
      socket.emit("join_room", activeRoom);
    }
  };
  joinRoom();

  const sendMessage = () => {
    socket.emit("send_message", {
      message: newChat,
      room: activeRoom,
      username: props.username,
    });
  };

  const handleChatChange = (e) => {
    setNewChat(e.target.value);
  };

  const handleSendChat = () => {
    if (newChat.trim() !== "") {
      sendMessage();
      setChats([
        ...chats,
        { message: newChat, room: activeRoom, username: props.username },
      ]);
      setNewChat("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendChat();
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChats([...chats, data]);
    });
  });

  return (
    <div className="border-solid border-red-600">
      <div className="">
        <div
          className="border chats space-y-2 absolute top-0 left-0 right-0 p-4 bottom-[56px] overflow-y-auto"
          ref={(el) => {
            if (el) el.scrollTop = el.scrollHeight;
          }}
        >
          {chats.map((chat) => (
            <ChatBox
              username={props.username}
              key={uniqid()}
              whose={chat.username === props.username ? "yours" : "others"}
              chat={chat.message}
            />
          ))}
        </div>
        <div className="flex space-x-2 absolute bottom-4 left-2 right-2 ">
          <input
            type="text"
            value={newChat}
            onChange={handleChatChange}
            onKeyDown={handleKeyDown}
            className="border border-gray-300 p-2 rounded flex-grow"
          />
          <button
            onClick={handleSendChat}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
