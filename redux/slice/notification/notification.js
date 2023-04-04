import { combineReducers } from "@reduxjs/toolkit";
import Notification from "./notificationSlice";

const notificationReducers = combineReducers({
    Notification,
});

export default notificationReducers;
