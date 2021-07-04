import { createSlice } from "@reduxjs/toolkit"; //{ createAsyncThunk,
// import { fetchCount } from "./counterAPI";

const initialState = {
  user: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors allow us to pull info from the data layer!
export const selectUser = (state) => state.userSlice.user;

export default userSlice.reducer;
