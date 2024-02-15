import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartstate: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, actions) => {
      state.cart.push(actions.payload);
    },
    togglecartstate: (state, actions) => {
      state.cartstate = !state.cartstate;
    },
  },
});

export const { addtocart, togglecartstate } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
