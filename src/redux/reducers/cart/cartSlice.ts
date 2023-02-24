import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { CartItemType } from "./types";
import { ClientType } from "../../../pages/checkout/types";

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      // TODO: validate item does already exists on array
      state.items.push(action.payload);
    },
    // add client to cart
    addClient: (state, action: PayloadAction<ClientType>) => {
      state.client = action.payload;
    },
  },
});

export const { addItem, addClient } = cartSlice.actions;

export default cartSlice.reducer;
