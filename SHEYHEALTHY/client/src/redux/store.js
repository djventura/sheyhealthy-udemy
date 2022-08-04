import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { alertsSlice } from "./alertsSlice";


const rootReducer = combineReducers({
    alert: alertsSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;