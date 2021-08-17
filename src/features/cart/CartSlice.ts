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
        // find out if the item exists
        const existItem = state.cart.find((x) => x.name === payload.name);
        if (existItem) {
          // if item does exist then map through the cart and find the item and replace it with a copy with +1 to the quantity
          state.cart = state.cart.map((x) =>
            x.name === payload.name
              ? { ...existItem, qty: existItem.qty + 1 }
              : x
          );
        } else {
          // if the item doesn't exist then push the payload to the cart
          state.cart.push(payload);
        }
      },
      prepare(product: Product) {
        return {
          payload: {
            name: product.name,
            price: product.price,
            qty: 1,
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

export const { addToCart, removeFromCart, setCart, reset } = cartSlice.actions;
export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;
