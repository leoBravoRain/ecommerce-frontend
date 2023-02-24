import { ProductType } from "../../../services/products/types";

export type CartItemType = ProductType & {
  quantity: number;
};

export type CartStateType = {
  items: CartItemType[];
};
