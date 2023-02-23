export type ProductType = {
  name: string;
  photoUrl: string;
  shortDescription: string;
};

export type ProductsResponse = { products: ProductType[] } | undefined;
