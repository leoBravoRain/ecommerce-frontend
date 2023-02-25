import Grid from "@mui/material/Unstable_Grid2";
import { CircularProgress, Container } from "@mui/material";

import { useProducts } from "../../services/products/products";

import ProductCard from "./components/productCard.tsx/ProductCard";

const Catalog = () => {
  const { products, isLoading } = useProducts();

  return (
    <>
      {/* list of products */}
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {!isLoading ? (
          <Grid container rowSpacing={3} columnSpacing={2}>
            {products.map((product) => (
              <Grid xs={6} sm={3} key={product._id}>
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
