import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    listItems: null,
  },

  reducers: {
    addtoList: (state, actions) => {
      state.listItems = actions.payload;
    },
  },
});
export const { addtoList } = itemSlice.actions;
export default itemSlice.reducer;
