import React from "react";
import "./App.css";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      {/* <h1> this is header!</h1> */}
      <div className="header__left">
        {/* <h1>This is left side</h1> */}
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />

          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        {/* home, mynetwork, notifications, etc... */}
        {/* <h1>This is right side</h1> */}
        {/* Reusable component  */}
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          Icon={NotificationsNoneOutlinedIcon}
          title="Notifications"
        />

        {/* Avatar */}
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
