import { createSlice } from "@reduxjs/toolkit";



export let CartData=createSlice({
    name:"Cart",
    initialState:{
        cartArr:[]
    },
    reducers:{
        cart:(state,action)=>{
            state.cartArr=[...state.cartArr,action.payload]
            // console.log(action);
            
        },
        remove_item:(state,action)=>{
            
            let newArr=state.cartArr.filter((val,ind)=>{
                console.log(val.id);
                console.log(action.payload);
                
                return val.id!==action.payload
            })

            state.cartArr= newArr
        }
    }
})

export let {cart,remove_item}=CartData.actions;

export default CartData.reducer;