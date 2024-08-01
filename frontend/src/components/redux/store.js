import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice"
import ServiceReducer from "./slices/servicesSlice"
import UserReducer from "./slices/userSlice"
import BookingReducer from "./slices/bookingSlice";


const store = configureStore({
    reducer : {
        login : LoginReducer,
        service : ServiceReducer,
        users : UserReducer,
        booking : BookingReducer,
    }
})


export default store;