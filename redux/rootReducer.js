import { combineReducers } from "redux";
import authReducers from "./slice/auth/auth";
import cropReducers from "./slice/Crop/crop";
import marketReducers from "./slice/marketplace/marketplace";

export default combineReducers({
    authReducers,
    cropReducers,
    marketReducers

});
