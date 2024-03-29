import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products";
import { cartReducer } from "./cart";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
