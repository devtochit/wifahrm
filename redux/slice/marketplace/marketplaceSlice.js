import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
// import { AppDispatch } from "../../configureStore";
// import { PRE_URL } from "../../../utils/ENV/envs";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState = {
  MarketData: null,
  loading: false,
};

const getMarketSlice = createSlice({
  name: "getMarket",
  initialState,
  reducers: {
    getMarketRequested: (state, action) => {
      state.loading = true;
    },
    getMarketReceived: (state, action) => {
      state.loading = false;
      state.MarketData = action.payload;
      console.log( state.MarketData)
    },
    getMarketRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getMarketRequestFailed", action.payload);
    },
  },
});

const { getMarketRequested, getMarketReceived, getMarketRequestFailed } =
  getMarketSlice.actions;

export default getMarketSlice.reducer;

export const getMarketData = () => async (dispatch) => {
  // const getToken = await retrieveUserDetails();
  // console.log(getToken.data.jwtToken)
  try {
    const getToken = await retrieveUserDetails();
    if (getToken && getToken.data.jwtToken) {
      const token = getToken.data.jwtToken;
      dispatch(
        apiCallBegan({
          url:"api/market/getallmarketcrops/",
          extraheaders:"jwtToken"+ token,
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
