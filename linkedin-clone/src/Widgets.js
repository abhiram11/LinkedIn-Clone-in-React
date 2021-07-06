import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {/* <h1>This is widgets!</h1> */}
      {newsArticle("Abhi writes a tickly article", "Top News - 2699 readers")}
      {newsArticle("Coronavirus: India Updates", "Top News - 18542 readers")}
      {newsArticle("UEFA Euro 2020", "Sports - 101077 readers")}
      {newsArticle("Is Redux too good?", "Code - 668 readers")}
      {newsArticle("Be a Swiss Knife, Skill-wise", "Personality - 1 reader")}
    </div>
  );
}

export default Widgets;
