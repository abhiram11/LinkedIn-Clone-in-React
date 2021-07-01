import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar top : profile info and related data
            Bottom : Rest of info, tags, etc. */}
      <h1>This is sidebar!</h1>
      <div className="sidebar__top">
        <img src="" alt="" />
        {/* Background */}
        <Avatar
          className="sidebar__avatar"
          src="https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo"
        />
        <h2>Abhiram Satpute</h2>
        <h4>abhiramsatpute@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you: </p>
          <p className="sidebar__statNumber">1,654</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post:</p>
          <p className="sidebar__statNumber2">2,793</p>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
