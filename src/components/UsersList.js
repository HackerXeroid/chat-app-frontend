import uniqid from "uniqid";
import React from "react";
import UserProfile from "./UserProfile";

const UsersList = (props) => {
  return (
    <div className="flex h-screen">
      <div className="w-full">
        {/* Sidebar content */}
        <h1 className="text-2xl px-4 py-6 heading border-b-2 ">Users List</h1>
        <ul className="py-4 ">
          {props.users.map((user) => (
            <li className="px-4 py-2 flex" key={uniqid()}>
              <UserProfile username={props.users[0].username} />
            </li>
          ))}
          {/* Add more users here */}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
