import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { CartItemType } from "./types";
import { ClientType } from "../../../pages/checkout/types";

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add client to cart
    addClient: (state, action: PayloadAction<ClientType>) => {
      state.client = action.payload;
    },
    // update items array
    setItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addClient, setItems } = cartSlice.actions;

export default cartSlice.reducer;
