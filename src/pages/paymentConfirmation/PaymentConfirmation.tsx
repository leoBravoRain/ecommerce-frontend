import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
      <p>Your sale was successfull!</p>
      <Button onClick={goToHome} variant="contained">
        Return to home
      </Button>
    </Container>
  );
};

export default PaymentConfirmation;
