import z from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  photoUrl: z.string(),
  shortDescription: z.string(),
  price: z.number(),
});

export const ProductsSchema = z.object({
  products: ProductSchema.array(),
});
