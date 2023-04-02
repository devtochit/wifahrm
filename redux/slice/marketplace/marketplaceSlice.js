import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState = {
  MarketData: [],
  category: '',
  loading: false,
};

const marketplaceSlice = createSlice({
  name: "marketplaceSlice",

  initialState,
  reducers: {
    getMarketRequested: (state, action) => {
      state.loading = true;
    },
    getMarketReceived: (state, action) => {
      state.loading = false;
      state.MarketData = action.payload;
    },
    getMarketRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getMarketRequestFailed", action.payload);
    },
    selectCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {
  getMarketRequested,
  getMarketReceived,
  getMarketRequestFailed,
  selectCategory,
} = marketplaceSlice.actions;

export const getMarketData = () => async (dispatch) => {
  try {
    const getToken = await retrieveUserDetails();
    if (getToken && getToken.data.jwtToken) {
      const token = getToken.data.jwtToken;
      dispatch(
        apiCallBegan({
          url: "api/market/getallmarketcrops/",
          extraheaders: "jwtToken" + token,
          method: "get",
          onStart: getMarketRequested.type,
          onSuccess: getMarketReceived.type,
          onError: getMarketRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getMarketRequestFailed(error.message));
    }
  } catch (error) {
    console.error("An error occurred while fetching user profile:", error);
    dispatch(getMarketRequestFailed(error.message));
  }
};

export default marketplaceSlice.reducer;
