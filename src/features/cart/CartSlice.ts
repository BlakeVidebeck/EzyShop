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
        // find out if the only item exists
        const existItem = state.cart.find((x) => x.name === payload.name);
        if (existItem) {
          // if item does exist then return the cart
          state.cart = [...state.cart];
        } else {
          // if the item doesn't exist then push the payload to the cart
          state.cart.push(payload);
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
        // update the cart with the new payload
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
      // filter the item out from the cart
      state.cart = state.cart.filter((item) => item.name !== payload);
    },
    setCart: (state, { payload }: PayloadAction<Product[]>) => {
      // set the cart to the payload
      state.cart = payload;
    },
    // reset the cart
    reset: (state) => initialState,
  },
});

export const { addToCart, removeFromCart, updateCart, setCart, reset } =
  cartSlice.actions;
export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;
