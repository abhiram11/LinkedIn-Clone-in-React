import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

//00:22:00 left and right sections for the container
//00:35:00 using props to make reusable components
//00:43:00 justify-content:space-evenly will push the content in the middle
//00:44:00 stick the header on top. position:sticky, top:0, the z-index: 999 is the vertical STACKING order of elements!
//1:09:21 using FUNCTIONS instead of REUSABLE COMPONENTS .. !!! Takes in arguements, and returns values!
//1:16:30 using "form" so that as we press Enter it submits (?), We also hide the "Send" button
//1:20:30 a form submitted refreshes the page..!!!
//1:27:45 sonny's dad from kenya nice to know haha
//1:28:00 POSTS begin!!!!
//1:33:40 handle large texts in p tag or others using overflow-wrap: anywhere;
//1:35:00 ****!!!REUSE THE INPUT OPTION (PHOTO VIDEO EVENT ARTICLE) for LIKE COMMENT SHARE ETC as WELL!!!!!

function App() {
  return (
    <div className="app">
      {/* <h1>Let's build a LinkedIn Clone!</h1> */}
      {/* Header */}

      <Header />

      {/* App Body  */}
      <div className="app__body">
        {/* Sidebar  */}
        {/* <Sidebar /> */}
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  );
}

export default App;
