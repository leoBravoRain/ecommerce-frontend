import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

import { routes } from "../../config/routes";
import { useAppDispatch } from "../../redux/hooks.types";
import { setItems } from "../../redux/reducers/cart/cartSlice";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goToHome = () => {
    // remote items from cart
    dispatch(setItems([]));

    // go to catalog
    navigate(routes.catalog);
  };

  return (
    <Container>
      <Alert severity="success" sx={{ marginTop: "20px" }}>
        Your sale was successfull!
      </Alert>
      <Box marginY={3}>
        <Typography>
          We have sent you the order and the confirmation to your email
        </Typography>
      </Box>
      <Button onClick={goToHome} variant="outlined">
        <Home sx={{ marginRight: "2px" }} />
        Return to home
      </Button>
    </Container>
  );
};

export default PaymentConfirmation;
