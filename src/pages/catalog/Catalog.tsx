import Grid from "@mui/material/Unstable_Grid2";
import {  CircularProgress, Container, Typography } from "@mui/material";

import { useProducts } from "../../services/products/products";

import ProductCard from "./components/productCard.tsx/ProductCard";

// TODO: add compnay from backend
const companyMock = {
  name: "Open Fashion",
};

const Catalog = () => {
  const { products, isLoading } = useProducts();

  return (
    <>
      {/* company title */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginY: "20px", marginLeft: "15px" }}
      >
        {companyMock.name}
      </Typography>

      {/* list of products */}
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {!isLoading ? (
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid xs={6} sm={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <CircularProgress size={50} />
        )}
      </Container>
    </>
  );
};

export default Catalog;
