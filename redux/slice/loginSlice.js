import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../services/login";

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    user: {},
    details: {},
    isLogging: "",
    showModal: true, 
  },
  reducers: {
    setUserDetails: (state, action) => {},
    setShowModal: (state, action) => {
      state.showModal = true;
    },
    setCloseModal: (state, action) => {
      state.showModal = false;
    },
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
        state.showModal = true;
    
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLogging = "failed";
        state.error = action.error.message;
        state.isLogging = "";
      });
  },
});

const { reducer, actions } = loginSlice;
export const { setUserDetails, setShowModal,setCloseModal } = actions;
export default reducer;
