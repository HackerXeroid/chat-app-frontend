import UserProfile from "./UserProfile";
import ChatRoomPreview from "./ChatRoomPreview";

const SideBar = (props) => {
  return (
    <div className="w-full p-4 bg-gray-200 h-screen flex flex-col justify-between items-stretch">
      <UserProfile
        username={props.username}
        setUsername={props.setUsername}
        refreshOption={true}
      />
      <div className="">
        <h2 className="text-2xl  pb-4 heading">Chat Rooms</h2>
        <ul className="flex flex-col gap-3 w-full relative">
          <ChatRoomPreview
            isActive={true}
            name={"Room 1"}
            lastMsg={"Welcome"}
          />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
