import { combineReducers } from "@reduxjs/toolkit";
import CropSlice from "./cropSlice";

const cropReducers = combineReducers({
    CropSlice,
});

export default cropReducers;
