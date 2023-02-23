import { QueryFunction, QueryKey } from "react-query";

import { ProductProps, ProductResponse, ProductsResponse } from "./types";
import API from "../api";
import { resource } from "./constants";
import { ProductSchema, ProductsSchema } from "./schema";

export const getProducts: QueryFunction<
  ProductsResponse,
  QueryKey
> = async () => {
  return API.get(resource).then((response) =>
    ProductsSchema.parse(response.data)
  );
};

export const getProduct: QueryFunction<ProductResponse, QueryKey> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { productId }] = queryKey as [unknown, ProductProps];

  return API.get(`${resource}/${productId}`).then((response) => ({
    product: ProductSchema.parse(response.data.product),
  }));
};
