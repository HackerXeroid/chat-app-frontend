import React from "react";

const ChatRoomPreview = (props) => {
  return (
    <div
      className={`chat-preview w-full ${
        props.isActive ? "bg-[#E8FBFF]" : "bg-white"
      } p-4 font-[poppins] rounded-xl`}
    >
      <h3 className="heading tracking-wider font-normal">{props.name}</h3>
      <p className="text-xs text-gray-400 text-ellipsis username">
        {props.lastMsg}
      </p>
    </div>
  );
};

export default ChatRoomPreview;
