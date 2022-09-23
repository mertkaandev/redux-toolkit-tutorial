import {createSlice} from "@reduxjs/toolkit";

const initialState = {
      currentUser: null,
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state)=> {
            state.currentUser = null;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
        }
    }
});

export const UserReducer = UserSlice.reducer;
export const {loginStart, loginSuccess, logout} = UserSlice.actions;