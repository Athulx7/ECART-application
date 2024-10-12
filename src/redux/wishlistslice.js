import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addtoWishlist:(state,action)=>{
            state.push(action.payload)
            toast.success(" product added to wishlist",{
                position:'top-center'
            })
           
        },
        removefromwishlist:(state,action)=>{
            return state.filter(item =>item.id !=action.payload)
        }
    }
})

export const {addtoWishlist,removefromwishlist} = wishlistSlice.actions
export default wishlistSlice.reducer