import { AxiosError } from "axios";
import { UseMutationOptions } from "react-query";

import { ClientType } from "../../pages/checkout/types";

export type ProductItemType = {
  productId: string;
  quantity: number;
};

export type CreateSalePayload = {
  client: ClientType;
  products: ProductItemType[];
};

// for now it is not going to response with nothing
// but to improve, maybe it can respond with useful information it can display to final user to confirmate payment
export type CreateSaleResponse = {};

export interface CreateSaleProps
  extends Omit<
    UseMutationOptions<
      CreateSaleResponse | undefined,
      AxiosError,
      CreateSalePayload,
      unknown
    >,
    "mutationFn" | "mutationKey"
  > {}
