import { combineReducers } from "@reduxjs/toolkit";
import Authentication from "./AuthenticationSlice";

const authReducers = combineReducers({
    Authentication,
});

export default authReducers;
