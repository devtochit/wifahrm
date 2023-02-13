import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser,} from "../services/registration";

export const registerSlice = createSlice({
  name: "registerSlice",
  initialState: {
    register: {}, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state, action) => {
        state.registering = "loading";
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.registering = "succeeded";
        state.register = action.payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.registering = "failed";
        state.error = action.error.message;
      })

     
  },
});

const { reducer } = registerSlice;

export default reducer;
