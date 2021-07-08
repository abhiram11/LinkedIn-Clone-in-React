import { Avatar } from "@material-ui/core";
import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <Avatar className="profile__avatar" img="" alt="" />
      <h4>User Name</h4>
      {/* <p>User Bio</p> */}
    </div>
  );
}

export default Profile;
