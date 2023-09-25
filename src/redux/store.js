import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productsSlice,
  },
});
