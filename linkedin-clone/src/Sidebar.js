import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      {/* Sidebar top : profile info and related data
            Bottom : Rest of info, tags, etc. */}
      {/* <h1>This is sidebar!</h1> */}
      <div className="sidebar__top">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        {/* Background */}
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you: </p>
          <p className="sidebar__statNumber">1,654</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post:</p>
          <p className="sidebar__statNumber">2,793</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("abhiramisinterested")}
        {recentItem("inyourcompany")}
      </div>
    </div>
  );
}

export default Sidebar;
