import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";

import {
retrieveUserDetails,
storeUserDetails,
} from "../../../utils/helperFunctions/userDataHandlers";

const initialState = {
userData: "",
validationData: "",
loading: false,
isLoggedIn: false,
message: "",
error: "",
isUserValidated: false,
registrationStatus: false,
};

const AuthenticationSlice = createSlice({
name: "Authentication",
initialState,
reducers: {

loginRequested: (state, action) => {
state.loading = true;
},

loginReceived: (state, action) => {
    state.loading = false;
    state.isLoggedIn = true;
    storeUserDetails(JSON.stringify(action.payload));
    state.userData = JSON.stringify(action.payload);
    localStorage.setItem("userDetails", JSON.stringify(action.payload));
  },
loginRequestFailed: (state, action) => {
  state.loading = false;
  state.error = action.payload.response.data.error;

},
logUserOut: (state) => {
  state.loading = false;
  state.isLoggedIn = false;
  state.userData = "";
},



registrationRequested: (state, action) => {
  state.loading = true;
},
registrationReceived: (state, action) => {
  state.loading = false;
  state.registrationStatus = true;
},
registrationRequestFailed: (state, action) => {
  state.loading = false;
  // state.error = action.payload.response.data.message.error;
},
},
});

const {
loginRequested,
loginReceived,
loginRequestFailed,
logUserOut,
registrationRequested,
registrationReceived,
registrationRequestFailed,
} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;



export const logout = () => (dispatch, getState) => {
dispatch(logUserOut());
};

export const checkLogin = () => async (dispatch) => {
const userDetails = await retrieveUserDetails();
if (userDetails) {
dispatch(loginReceived(JSON.parse(userDetails)));
}
};

export const getUserDetails = () => async (dispatch) => {
const userDetails = await retrieveUserDetails();
return userDetails;
};

export const login = (loginDetails) => (dispatch) => {
    console.log("loginDetails", loginDetails);
    dispatch(
      apiCallBegan({
        url: "auth/login/",
        method: "post",
        data: loginDetails,
        onStart: loginRequested.type,
        onSuccess: loginReceived.type,
        onError: loginRequestFailed.type,
      })
    );
  };



export const RegisterUser =
(registrationDetails) => (dispatch) => {
dispatch(
apiCallBegan({
  url: "api/registration/registerNewUser",
method: "post",
data: registrationDetails,
onStart: registrationRequested.type,
onSuccess: registrationReceived.type,
onError: registrationRequestFailed.type,
})
);
};





