import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// ORIGINAL

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
