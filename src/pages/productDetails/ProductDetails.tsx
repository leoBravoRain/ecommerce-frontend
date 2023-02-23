import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useProduct } from "../../services/products/products";

const ProductDetails = () => {
  let { productId } = useParams();

  // get product
  const { product, isLoading } = useProduct({ productId });

  return (
    <Container>
      {!isLoading ? (
        <Container>
          {/* name */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginY: "20px", marginLeft: "15px" }}
          >
            {product?.name}
          </Typography>

          {/* photo */}
          <img
            src={product?.photoUrl}
            alt={product?.name}
            loading="lazy"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          {/* description */}
          <Typography
            variant="body1"
            gutterBottom
            sx={{ marginY: "20px", marginLeft: "15px" }}
          >
            {product?.shortDescription}
          </Typography>
        </Container>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={50} />
        </Box>
      )}
    </Container>
  );
};

export default ProductDetails;
