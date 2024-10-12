import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./wishlistslice";
import cartSlice from "./cartslice";

const store = configureStore(
    {
        reducer:{
            wishlistreducer : wishlistslice ,
            cartreducer:cartSlice

        }
    }
)
export default store