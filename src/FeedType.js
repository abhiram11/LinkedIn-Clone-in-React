import React from "react";
import "./FeedType.css";

function FeedType({ Icon, title }) {
  return (
    <div className="feedType">
      {Icon && <Icon className="feedType__icon" />}
      {title && <h4>{title}</h4>}{" "}
    </div>
  );
}

export default FeedType;
