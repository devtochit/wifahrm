import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {},
    },
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload
        },
    },
    extraReducers: {}
})


export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
