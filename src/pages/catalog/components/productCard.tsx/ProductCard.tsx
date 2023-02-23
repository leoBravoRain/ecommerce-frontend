import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import { ProductCardProps } from "./types";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.photoUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default ProductCard;
