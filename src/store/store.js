import {configureStore, /*combineReducers*/} from "@reduxjs/toolkit";
import {UserReducer} from "../features/UserSlice.js";

/* const rootReducers = combineReducers({
       userReducer,
       postReducer,
       commentReducer,
})*/

const store = configureStore({
    reducer: {
       user: UserReducer,
    }
});

export default store;