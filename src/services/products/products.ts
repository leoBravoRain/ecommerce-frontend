import { useQuery } from "react-query";

import { ProductProps, ProductResponse, ProductsResponse } from "./types";
import { resource } from "./constants";
import { getProduct, getProducts } from "./requests";

// get list of products
export const useProducts = () => {
  // It can be useInfiniteQuery if backend implement pagination
  const { data, isLoading } = useQuery<ProductsResponse>(resource, getProducts);

  const products = data?.products || [];

  return {
    products,
    isLoading,
  };
};

// get one product
export const useProduct = ({ productId }: ProductProps) => {
  const { data, isLoading } = useQuery<ProductResponse>(
    [resource, { productId }],
    getProduct,
    {
      enabled: !!productId,
    }
  );

  const product = data?.product;

  return {
    product,
    isLoading,
  };
};
