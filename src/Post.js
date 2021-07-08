import { Icon } from "@material-ui/core";
import React from "react";
import "./Post.css";
import Profile from "./Profile";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SubdirectoryArrowRightRoundedIcon from "@material-ui/icons/SubdirectoryArrowRightRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import Response from "./Response";

function Post() {
  //   const Response = (Icon, title) => (
  //     <div className="post__response">
  //       {Icon && <Icon />} {title && <h4>{title}</h4>}
  //     </div>
  //   );

  return (
    <div className="post">
      {/* <h2>This is a post</h2> */}
      {/* Profile and Info */}
      <Profile />
      {/* content */}
      <h5>This is the content here</h5>
      {/* Like comment share send */}
      <div className="post__response">
        <Response title="Like" Icon={ThumbUpOutlinedIcon} />
        <Response title="Comment" Icon={ChatOutlinedIcon} />
        <Response title="Share" Icon={SubdirectoryArrowRightRoundedIcon} />
        <Response title="Send" Icon={SendRoundedIcon} />
      </div>
      {/* {Response({ ThumbUpIcon }, "Like")} */}
      {/* {Response()}
      {Response()}
      {Response()} */}
    </div>
  );
}

export default Post;
