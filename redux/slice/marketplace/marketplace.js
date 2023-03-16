import { combineReducers } from "@reduxjs/toolkit";
import getMarketSlice from "./marketplaceSlice";

const marketReducers = combineReducers({
    getMarketSlice,
});

export default marketReducers;
