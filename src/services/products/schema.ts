import z from "zod";

export const ProductSchema = z.object({
  _id: z.string(),
  name: z.string(),
  photoUrl: z.string(),
  shortDescription: z.string(),
});

export const ProductsSchema = z.object({
  products: ProductSchema.array(),
});
