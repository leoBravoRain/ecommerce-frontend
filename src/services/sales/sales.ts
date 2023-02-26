import { useMutation } from "react-query";
import { AxiosError } from "axios";

import {
  CreateSalePayload,
  CreateSaleProps,
  CreateSaleResponse,
} from "./types";
import { createSale } from "./requests";

// use to create a sale
export const useCreateSale = ({ ...opts }: CreateSaleProps = {}) =>
  useMutation<CreateSaleResponse, AxiosError, CreateSalePayload>(
    "createSale",
    createSale,
    {
      ...opts,
    }
  );
