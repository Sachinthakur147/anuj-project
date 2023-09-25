import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalItemsCount: 0,
};

const productsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem: (state, action) => {
    //   console.log(action.payload);
    //   const item = state.items[action.payload.id];
    //   // console.log(item)
    //   const quantity =
    //     item && item.hasOwnProperty("quantity")
    //       ? state.items[action.payload.id]?.quantity +action.payload.value
    //       : action.payload.value;
    //   state.items[action.payload.id] = {
    //     ...action.payload.menuItem,
    //     quantity,
    //   };
    //   state.totalItemsCount += action.payload.value;
    // },

    addItemByOne: (state, action) => {
      // console.log(action.payload)
      const itemInCart = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.totalItemsCount++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.totalItemsCount++;
        console.log(current(state.products));
      }
    },
  },
  clearOneItem: (state, action) => {
    console.log("I am reaching here");
    const item = state.products.find((item) => item.id === action.payload);
    if (item.quantity === 1) {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    } else {
      item.quantity--;
      state.totalItemsCount--;
    }
  },
  clearAllItem: (state, action) => {
    const removeItems = state.cart.filter((item) => item.id !== action.payload);
    state.cart = removeItems;
  },
});

// export const {
//   addItem,
//   removeItem,
//   clearAllItem,
//   setItem,
//   addItemByOne,
//   clearOneItem,
// } = cartSlice.actions;
export const {
  removeItemByOne,
  clearAllItem,
  addItemByOne,
  clearOneItem,
} = productsSlice.actions;
export default productsSlice.reducer;
