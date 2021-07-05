import { createSlice } from "@reduxjs/toolkit"; //{ createAsyncThunk,
// import { fetchCount } from "./counterAPI";

// const initialState = {
//   user: null,
//   status: "idle",
// };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      //state means the actual state of the current slice, here user slice
      state.user = action.payload; //payload = just object that we pass along with action
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors allow us to pull info from the data layer!
export const selectUser = (state) => state.user.user; //taking user slice, and then taking user variable from it!

export default userSlice.reducer;
