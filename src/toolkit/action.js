import { createSlice } from "@reduxjs/toolkit";

export let CartData = createSlice({
  name: "Cart",
  initialState: {
    cartArr: [],
  },
  reducers: {
    // add one more of an item
    cart: (state, action) => {
      state.cartArr = [...state.cartArr, action.payload];
    },
    // remove every copy of an item (the "Remove" button)
    remove_item: (state, action) => {
      state.cartArr = state.cartArr.filter((val) => val.id !== action.payload);
    },
    // remove only one copy of an item (the "-" button)
    remove_one: (state, action) => {
      const index = state.cartArr.findIndex((val) => val.id === action.payload);
      if (index !== -1) state.cartArr.splice(index, 1);
    },
    // empty the cart (after a successful payment)
    clear_cart: (state) => {
      state.cartArr = [];
    },
  },
});

export let { cart, remove_item, remove_one, clear_cart } = CartData.actions;

export default CartData.reducer;
