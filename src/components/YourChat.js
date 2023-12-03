import React from "react";

const YourChat = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        {/* Chat messages */}
        <div className="flex flex-col space-y-2">
          {/* Individual chat message */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="https://via.placeholder.com/40"
                alt="User Avatar"
              />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-sm text-gray-700">Hey, how's it going?</div>
            </div>
          </div>
          {/* Add more chat messages here */}
        </div>
      </div>
      {/* Chat input */}
      <div className="flex items-center p-2 border-t">
        <input
          className="flex-grow px-4 py-2 mr-2 text-sm border rounded-full focus:outline-none"
          type="text"
          placeholder="Type your message..."
        />
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default YourChat;
