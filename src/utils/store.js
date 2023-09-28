import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import itemSlice from "./itemSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    list: itemSlice,
    user: userReducer,
  },
});

export default store;
