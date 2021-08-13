import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../App";
import { Product } from "../../components/Product";

export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.name !== payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;
