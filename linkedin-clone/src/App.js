import React from 'react';
import './App.css';
import Header from './Header';

//00:22:00 left and right sections for the container
//00:35:00 using props to make reusable components
//00:43:00 justify-content:space-evenly will push the content in the middle
//00:44:00 stick the header on top. position:sticky, top:0, the z-index: 999 is the vertical STACKING order of elements!

function App() {
  return (
    <div className="app">
      {/* <h1>Let's build a LinkedIn Clone!</h1> */}
      <Header></Header>
      {/* Header */}
      {/* App Body  */}
      {/* Sidebar  */}
      {/* Feed */}
      {/* Widgets */}

    </div>
  );
}

export default App;
