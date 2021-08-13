import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";

import cartReducer from "./src/features/cart/CartSlice";
import { Navigation } from "./src/infrastructure/navigation";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
