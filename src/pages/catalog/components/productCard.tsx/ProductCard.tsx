import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ProductCardProps } from "./types";
import { productDetailsBaseUrl } from "../../../../config/routes";
import { priceFormatter } from "../../../../utils/utils";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  let navigate = useNavigate();

  const goToProductDetails = () => {
    navigate(`${productDetailsBaseUrl}/${product.id}`);
  };

  return (
    <Card sx={{ maxWidth: "250px" }} onClick={goToProductDetails}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.photoUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.shortDescription}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {priceFormatter.format(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
