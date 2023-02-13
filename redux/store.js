import { configureStore, combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./slice/messagesSlice";
import loginSlice from "./slice/loginSlice";
import registerSlice from "./slice/registerSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserSlice from "./slice/userSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  message: messageReducer,
  register: registerSlice,
  login: persistReducer(persistConfig, loginSlice),
  user: UserSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: [thunk],
});
