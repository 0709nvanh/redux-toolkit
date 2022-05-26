import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../api/user";

export const Register = createAsyncThunk(
    "auth/Register",
    async (value) => {
        const { data } = await signup(value);
        return data
    }
)

export const logIn = createAsyncThunk(
    "auth/logIn", 
    async (value) => {
        const { data } = await login(value);
        return data
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(Register.fulfilled, (state, action) => {
           state.value = action.payload
        })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.value = action.payload
        })
    },
    reducers: {
        logout: (state, acton) => {
            state.value = {}
        }
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer