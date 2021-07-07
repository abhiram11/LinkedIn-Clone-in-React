import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./Login";
import { auth } from "./firebase";

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
//1:42:00 install firebase to project using `yarn add firebase` after adding the config
//  from console.firebase in a new firebase.js file here
// 1:44:04 firestore db is sorta noSQL db
// 1:46:30 having open parentheses with `=>` means an implicit return
//1:46:55 we created real-time listener to firebase
//1:49:30 understanding how input from the `form` gets captured, and then sent to the db,
// adding a timestamp as well, and that timestamp is from firestore server itself! so same for all
// 1:52:45 how DESTRUCTURING is done, posts.map(posts) se posts.map({ id, data : {x,y,z}})
// 1:53:00 why we MUST add a key/index to each POST in the list, so that re rendering is done only on the new/unique one!
// 1:59:00 REDUX >>>>> PROP DRILLING when props are used at different places, get hard to maintain
// 2:02:00 recheck at code
// 2:06:00 different slice of state for different purposes!!! REREAD THIS!
// 2:07:30 when we first make user, we DISPATCH an action to change the user!
// 2:10:20 useSelector is a hook from redux!
// 2:26:00 firebase is for backend....
// 2:41:40 catch(error.message) hota hai, but firebase gives error back in catch(error) itself
// 2:43:20 react has TREE SHAKING so it installs only the bits you need, removes what dont need
// 2:52:30 using react FLIP MOVE to have animations~~
// 2:53:30 using ForwardRef in React! these libs need a reference to the object that we want animated in
// wrap the child component <Post> inside the forwardRef!!!!
// 2:58:00 HOW TO SELL YOURSELF in a formal way!!!
// 2:59:00 sonny says he punjabi lol nice xD
// 3:06:40 setting up and deploying to firebase!

function App() {
  // PULL the user from the data store using selector
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //to restrict logout when the app loads/refreshes...
  //actually we are logged in but we are shown as loggedout at refresh
  useEffect(() => {
    //listens to any auth change
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            // we are settings the email, uid, displayname, photourl in redux store
            // and setting them to the rhs
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  });

  return (
    <div className="app">
      {/* <h1>Let's build a LinkedIn Clone!</h1> */}
      {/* Header */}

      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* Sidebar!!!!!!! CHANGE ITS POSIITON TO STICKY  */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
