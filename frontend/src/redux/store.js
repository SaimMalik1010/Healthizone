import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
//import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;