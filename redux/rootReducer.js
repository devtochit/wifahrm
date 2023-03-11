import { combineReducers } from "redux";
import authReducers from "./slice/auth/auth";
import cropReducers from "./slice/Crop/crop";

export default combineReducers({
    authReducers,
    cropReducers
});
