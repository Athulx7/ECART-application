import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:'cartslice',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
            toast.success("Product added to cart",{
                position:'top-center'
            })
        },
        removefromcart:(state,action)=>{
            return state.filter(item => item.id !=action.payload)
        },
        emptycarts:(state)=>{
            return state=[]
        }

    }
})

export const {addtocart,removefromcart,emptycarts} = cartSlice.actions
export default cartSlice.reducer