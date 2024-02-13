import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state ,actions) => {
      state.cart.push(actions.payload);
    },
    
  },
});

export const { addtocart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
