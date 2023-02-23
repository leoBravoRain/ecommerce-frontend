import { Button, Typography } from "@mui/material";

import ProductsTable from "./components/ProductsTable";
import ClientForm from "./components/ClientForm";

const Checkout = () => {
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
      <ProductsTable />

      {/* client form */}
      <ClientForm />

      {/* button to pay */}
      <Button variant="contained">Pay</Button>
    </>
  );
};

export default Checkout;
