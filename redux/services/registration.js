import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../slice/messagesSlice";

const RegisterURL = (data) => {
  return axios.post(`/auth/register`, data);
};

export const RegisterUser = createAsyncThunk(
  "registerUser/Post",
  async ({ data }, thunkAPI) => {
    try {
      const response = await RegisterURL(data);
      thunkAPI.dispatch(setMessage(response.data.message));

      return response.data;
    } catch (error) {
      console.error(error);
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
