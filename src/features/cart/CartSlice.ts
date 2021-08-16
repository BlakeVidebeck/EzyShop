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
    addToCart: {
      reducer(state, { payload }: PayloadAction<Product>) {
        const existItem = state.cart.find((x) => x.name === payload.name);
        if (existItem) {
          state.cart = [...state.cart];
        } else {
          state.cart = [...state.cart, payload];
        }
      },
      prepare(product: Product, qty: number) {
        return {
          payload: {
            name: product.name,
            price: product.price,
            qty,
          },
        };
      },
    },
    updateCart: {
      reducer(state, { payload }: PayloadAction<Product>) {
        state.cart = state.cart.map((product) =>
          product.name === payload.name ? payload : product
        );
      },
      prepare(product: Product, qty: number) {
        return {
          payload: {
            name: product.name,
            price: product.price,
            qty,
          },
        };
      },
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.name !== payload);
    },
    setCart: (state, { payload }: PayloadAction<Product[]>) => {
      state.cart = payload;
    },
    reset: (state) => initialState,
  },
});

export const { addToCart, removeFromCart, updateCart, setCart, reset } =
  cartSlice.actions;
export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;
