import React from "react";
import "./Response.css";

function Response({ Icon, title }) {
  return (
    <div className="response">
      {Icon && <Icon className="response__icon" />}
      {title && <h4>{title}</h4>}
    </div>
  );
}

export default Response;
