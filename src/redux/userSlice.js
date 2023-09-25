// "use client";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUser:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || {}
      : {},
  //   products:
  //     typeof localStorage !== "undefined"
  //       ? JSON.parse(localStorage.getItem("products")) || []
  //       : [],
  //   error: "",
  //   itemsCount: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state, action) => {
      localStorage.setItem("user", {});
    },

    // addProduct: (state, action) => {
    //   state.products.push(action.payload);
    //   localStorage.setItem(
    //     "products",
    //     JSON.stringify([...state.products, action.payload])
    //   );

    //   //   console.log("All products");
    //   console.log(current(state.products));
    // },

    // removeProduct: (state, action) => {
    //   const filteredProduct = state.products.filter(
    //     (product) => product.id !== action.payload
    //   );
    //   state.products = filteredProduct;
    //   localStorage.setItem("products", JSON.stringify([...filteredProduct]));
    //   //   NON FILTERED
    //   console.log(state.products);
    //   //   console.log(filteredProduct);
    //   //   localStorage.setItem("products", JSON.stringify([...filteredProduct]));
    // },

    // removeOneProduct: (state, action) => {
    //   const product = state.products[action.payload];
    //   // console.log(current[])
    //   if (product) {
    //     console.log(current(product));
    //     delete state.products[action.payload];
    //     localStorage.setItem("products", JSON.stringify([...filteredProduct]));
    //   }
    // },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
