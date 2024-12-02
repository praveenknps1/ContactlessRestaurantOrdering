import { createSlice } from "@reduxjs/toolkit";



export let CartData=createSlice({
    name:"Cart",
    initialState:{
        cartArr:[]
    },
    reducers:{
        cart:(state,action)=>{
            state.cartArr=[...state.cartArr,action.payload]
            console.log(action);
            
        }
    }
})

export let {cart}=CartData.actions;

export default CartData.reducer;