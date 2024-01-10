

import { createSlice } from "@reduxjs/toolkit";

const item =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: item,
    totalAmount: 0,
  },

  reducers: {
    addItems: (state, actions) => {
      state.items.push(actions.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items.map((item) => item))
      );
    },

    removeItem: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items.map((item) => item))
      );
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },

    changeQuantity: (state, actions) => {
      state.items = state.items
        .filter((item) =>
          item.id === actions.payload.id
            ? (item.qty = actions.payload.qty)
            : item.qty
        )
        .filter((item) => item.qty !== 0);

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items.map((item) => item))
      );
    },
  },
});

export const {
  addItems,
  clearCart,
  removeItem,
  changeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
