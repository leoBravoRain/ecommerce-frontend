import { MutationFunction } from "react-query";

import { CreateSalePayload, CreateSaleResponse } from "./types";
import API from "../api";

// request to create a sale
export const createSale: MutationFunction<
  CreateSaleResponse,
  CreateSalePayload
> = async ({ client, products }) =>
  API.post("/sales", { client, products }).then(
    (result) =>
      // if it return data, we can validate here with schema
      result.data
  );
