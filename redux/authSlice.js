import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signupApi, loginApi } from "./api";

const initialState = {
    user: null,
    jwt: null,
    error: null,
};


export const signup = createAsyncThunk("auth/signup", async (payload, { rejectWithValue }) => {
    try {
        const response = await signup(payload);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


export const login = createAsyncThunk("auth/login", async (payload, { rejectWithValue }) => {
    try {
        const response = await login(payload);
        const { jwt, user } = response.data;
        return { user, jwt };
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state, action) => {
            state.error = null;
        });
        builder.addCase(signup.rejected, (state, action) => {
            state.error = action.payload;
        });
        builder.addCase(signup.fulfilled, (state, action) => {
            state.error = null;
        });
        builder.addCase(login.pending, (state, action) => {
            state.error = null;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.error = action.payload;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.jwt = action.payload.jwt;
            state.error = null;
        });
    },
});



export const { clearError } = authSlice.actions;

export default authSlice
