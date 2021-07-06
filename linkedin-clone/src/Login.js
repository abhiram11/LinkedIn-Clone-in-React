import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  // pieces of states for all of them
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    // import authentication module prepared earlier in firebase file

    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profilePic: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    // console.log("You clicked to register!");
    e.preventDefault();
    // if there is no name
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        // go into the user and update the user now
        userAuth.user
          .updateProfile({
            // there variable names at LHS shouldnt be change since they are keys to the firebase
            // rhs are local names, in tutorial Url is URL at firebase, and local variable is Url, we have Url at fb now
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            // push the user (dispatch) into the redux user store
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      {/* <h1>You at Login!</h1> */}
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      {/* mapped the values to the slices  */}
      <form>
        <input
          type="text"
          placeholder="Full Name (Required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Picture URL (Optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now{" "}
        </span>
      </p>
    </div>
  );
}

export default Login;
