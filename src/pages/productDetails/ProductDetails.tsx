import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useProduct } from "../../services/products/products";
import { routes } from "../../config/routes";
import { setItems } from "../../redux/reducers/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.types";
import { getNewItems } from "./utils";
import { CartItemType } from "../../redux/reducers/cart/types";

const ProductDetails = () => {
  let { productId } = useParams();
  const [itemQuantity, setItemQuantity] = useState(1);
  const [productIsOnCart, setProductIsOnCart] = useState({
    id: 0,
    isIn: false,
  });

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  // get product
  const { product, isLoading } = useProduct({ productId });

  let navigate = useNavigate();

  useEffect(() => {
    // check if product is already in cart
    items.forEach((item, idx) => {
      // if product is already in cart, update quantity
      if (item._id === product?._id) {
        setItemQuantity(item.quantity);
        setProductIsOnCart({
          id: idx,
          isIn: true,
        });
      }
    });
  }, [items, product?._id]);

  const addItemToCart = () => {
    // get new items array
    const newItems = getNewItems(
      product,
      items,
      itemQuantity,
      productIsOnCart
    ) as CartItemType[];

    // set item on cart with quantity
    dispatch(setItems(newItems));
  };

  const goToCatalog = () => {
    // add item to cart
    addItemToCart();

    // go to catalog
    navigate(routes.catalog);
  };

  const goToCheckout = () => {
    // add item to cart
    addItemToCart();

    // go to checkout
    navigate(routes.checkout);
  };

  const increaseQuantity = () => {
    // this can be validated with items on inventory of this product
    setItemQuantity(itemQuantity + 1);
  };

  const decreaseQuantity = () => {
    setItemQuantity(itemQuantity - 1);
  };

  return (
    <Container>
      {!isLoading ? (
        <Container>
          {/* product is already in cart */}
          {productIsOnCart.isIn && (
            <Alert severity="success">Product is already in cart</Alert>
          )}
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

          {/* select quantity */}
          <ButtonGroup size="large" aria-label="large button group">
            <Button onClick={decreaseQuantity} disabled={itemQuantity === 1}>
              -
            </Button>
            <Button disabled={true}>{itemQuantity}</Button>
            <Button onClick={increaseQuantity}>+</Button>
          </ButtonGroup>

          {/* keep searching products */}
          <Button onClick={goToCatalog} variant="outlined">
            Add and see other products
          </Button>

          {/* button to go to checkout */}
          <Button onClick={goToCheckout} variant="contained">
            Go to pay
          </Button>
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
