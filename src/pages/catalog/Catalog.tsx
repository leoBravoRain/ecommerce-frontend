import Grid from "@mui/material/Unstable_Grid2";
import { CircularProgress, Container, Typography } from "@mui/material";

import { useProducts } from "../../services/products/products";

import ProductCard from "./components/productCard.tsx/ProductCard";

const Catalog = () => {
  const { products, isLoading } = useProducts();

  return (
    <Container>
      <Typography variant="h6" marginBottom={1}>
        Check our products!
      </Typography>
      {/* list of products */}
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {!isLoading ? (
          <Grid
            container
            rowSpacing={3}
            columnSpacing={2}
            sx={{
              width: "100%",
            }}
          >
            {products.map((product) => (
              <Grid xs={6} sm={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <CircularProgress size={50} />
        )}
      </Container>
    </Container>
  );
};

export default Catalog;
