import { z } from "zod";

import { ProductSchema } from "./schema";

export type ProductType = z.infer<typeof ProductSchema>;

export type ProductsResponse = { products: ProductType[] } | undefined;

export type ProductProps = {
  productId: string | undefined;
};

export type ProductResponse = { product: ProductType } | undefined;
