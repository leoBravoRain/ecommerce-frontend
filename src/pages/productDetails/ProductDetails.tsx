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
import Grid from "@mui/material/Unstable_Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { useProduct } from "../../services/products/products";
import { routes } from "../../config/routes";
import { setItems } from "../../redux/reducers/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.types";
import { getNewItems } from "./utils";
import { CartItemType } from "../../redux/reducers/cart/types";
import { priceFormatter } from "../../utils/utils";

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
      {!isLoading && !!product ? (
        <Container>
          {/* product is already in cart alert */}
          {productIsOnCart.isIn && (
            <Box marginBottom={2}>
              <Alert severity="success">Product is already in cart</Alert>
            </Box>
          )}
          <Grid container>
            <Grid
              xs={12}
              sm={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {/* photo */}
              <img
                src={product.photoUrl}
                alt={product.name}
                loading="lazy"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "450px",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6} style={{ marginTop: "20px" }}>
              {/* name */}
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>

              {/* description */}
              <Typography
                variant="body2"
                gutterBottom
                color="text.secondary"
                sx={{ marginTop: "10px" }}
              >
                {product.shortDescription}
              </Typography>

              {/* unit price */}
              <Typography
                variant="caption"
                gutterBottom
                color="text.secondary"
                sx={{ marginTop: "10px" }}
              >
                Unit price: {priceFormatter.format(product.price)}
              </Typography>

              {/* total price */}
              <Alert
                severity="info"
                sx={{ marginY: "10px", width: "fit-content" }}
              >
                <Typography
                  variant="caption"
                  gutterBottom
                  color="text.secondary"
                  sx={{ marginTop: "10px" }}
                >
                  Total: {priceFormatter.format(product.price * itemQuantity)}
                </Typography>
              </Alert>

              {/* select quantity */}
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <ButtonGroup size="large" aria-label="large button group">
                  <Button
                    onClick={decreaseQuantity}
                    disabled={itemQuantity === 1}
                  >
                    -
                  </Button>
                  <Button disabled={true}>{itemQuantity}</Button>
                  <Button onClick={increaseQuantity}>+</Button>
                </ButtonGroup>
              </Container>

              {/* actions buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {/* keep searching products */}
                <Button
                  onClick={goToCatalog}
                  variant="outlined"
                  sx={{ marginRight: "10px" }}
                >
                  <ShoppingCartIcon />
                  Add to cart
                </Button>

                {/* button to go to checkout */}
                <Button onClick={goToCheckout} variant="contained">
                  <AttachMoneyIcon />
                  Buy now
                </Button>
              </Box>
            </Grid>
          </Grid>
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
