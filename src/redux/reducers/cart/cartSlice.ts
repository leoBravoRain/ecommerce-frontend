import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { CartItemType } from "./types";

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      // TODO: validate item does already exists on array
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
