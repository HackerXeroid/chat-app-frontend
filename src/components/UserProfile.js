import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import randomImg from "../images/random.png";

const UserProfile = (props) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    // Fetch random image from robohash.org
    fetch("https://robohash.org/" + props.username)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          setImageLoading(false);
        };
      })
      .catch((err) => console.error("An error occured!"));
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 border-solid border-2">
      <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
        {imageLoading ? (
          <div className="lds-circle">
            <div>
              <img src={randomImg} alt="default" />
            </div>
          </div>
        ) : (
          <img src={`https://robohash.org/${props.username}`} alt="User" />
        )}
      </div>
      <p className="text-gray-500 text-lg">
        <strong></strong>
        {props.username}
      </p>
    </div>
  );
};

export default UserProfile;
