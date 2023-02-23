import { QueryFunction, QueryKey, useQuery } from "react-query";

import API from "../api";
import { ProductsResponse } from "./types";

const resource = "products";

const getProducts: QueryFunction<ProductsResponse, QueryKey> = async () => {
  return API.get(resource).then((response) => response.data);
};

export const useProducts = () => {
  // It can be useInfiniteQuery if backend implement pagination
  const { data, isLoading } = useQuery<ProductsResponse>(resource, getProducts);

  const products = data?.products || [];

  return {
    products,
    isLoading,
  };
};
