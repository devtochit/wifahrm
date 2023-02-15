import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../slice/messagesSlice";

const LoginURL = (data) => {
  return axios.post(`https://8080-sirhillsdev-wifarmapi-vir98dyz6ui.ws-eu86.gitpod.io/auth/login`, data);
};

export const LoginUser = createAsyncThunk(
  "loginUser/Post",
  async ({ data, router }, thunkAPI) => {
    try {
      const response = await LoginURL(data);
      thunkAPI.dispatch(setMessage(response.data.message));

      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      // router.push("/login");
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
