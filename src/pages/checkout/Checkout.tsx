import { Button, Typography } from "@mui/material";

import { useAppSelector } from "../../redux/hooks.types";

import ProductsTable from "./components/productsTable/ProductsTable";
import ClientForm from "./components/ClientForm";

const Checkout = () => {
  // get items from cart
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <>
      {/* company title */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginY: "20px", marginLeft: "15px" }}
      >
        Checkout
      </Typography>

      {/* list of products */}
      <ProductsTable items={cartItems} />

      {/* client form */}
      <ClientForm />

      {/* button to pay */}
      <Button variant="contained">Pay</Button>
    </>
  );
};

export default Checkout;
