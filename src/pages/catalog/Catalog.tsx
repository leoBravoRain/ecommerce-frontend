import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

import ProductCard from "./components/productCard.tsx/ProductCard";
import { ProductType } from "./components/productCard.tsx/types";

// TODO: add product from backend
const productMock = {
  name: "Pantalon",
  phothoUrl:
    "https://cdn.cliqueinc.com/posts/291921/expensive-looking-zara-clothing-291921-1645850132217-main.700x0c.jpg",
  shortDescription: "Prenda zara es la mejor",
};

// TODO: add compnay from backend
const companyMock = {
  name: "Open Fashion",
};

const Catalog = () => {
  // TODO: add product from BD
  // mock products
  const products: ProductType[] = [
    productMock,
    productMock,
    productMock,
    productMock,
  ];

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
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid xs={6} sm={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Catalog;
