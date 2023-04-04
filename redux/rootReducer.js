import { combineReducers } from "redux";
import authReducers from "./slice/auth/auth";
import cropReducers from "./slice/Crop/crop";
import marketReducers from "./slice/marketplace/marketplace";
import notificationReducers from "./slice/notification/notification";

export default combineReducers({
    authReducers,
    cropReducers,
    marketReducers,
    notificationReducers
});
