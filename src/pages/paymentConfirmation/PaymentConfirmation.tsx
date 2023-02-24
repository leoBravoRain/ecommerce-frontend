import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { routes } from "../../config/routes";

const PaymentConfirmation = () => {
  const navigate = useNavigate();

  const goToHome = () => {
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
