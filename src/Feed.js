import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FeedType from "./FeedType";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* <h1>This is feed!</h1> */}
      <div className="feed__top">
        <div className="feed__post">
          <CreateIcon className="feed__createIcon" />
          <input placeholder="Start a post"></input>
        </div>
        <div className="feed__select">
          <FeedType Icon={ImageIcon} title="Photo" />
          <FeedType Icon={YouTubeIcon} title="Video" />
          <FeedType Icon={EventIcon} title="Event" />
          <FeedType Icon={PostAddIcon} title="Write Article" />
        </div>
      </div>
      <div className="feed__divider"></div>
      <div className="feed__info">
        {/* <h1> Info and Posts will be posted here</h1> */}
        <Post></Post>
      </div>
    </div>
  );
}

export default Feed;
