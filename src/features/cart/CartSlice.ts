import { createSlice } from "@reduxjs/toolkit";

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
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
