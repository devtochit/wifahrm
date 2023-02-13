import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../services/login";

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    user: {},
    details: {},
    isLogging: "",
  },
  reducers: {
    setUserDetails: (state, action) => {},
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state, action) => {
        state.isLogging = "loading";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLogging = "succeeded";
        state.user = action.payload;
        state.isLogging = "";
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLogging = "failed";
        state.error = action.error.message;
        state.isLogging = "";
      });
  },
});

const { reducer, actions } = loginSlice;
export const { setUserDetails } = actions;
export default reducer;
