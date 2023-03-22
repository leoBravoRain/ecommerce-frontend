import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { PaymentFormType } from "./types";
import { initialState } from "./constants";
import { routes } from "../../config/routes";
import { useCreateSale } from "../../services/sales/sales";
import { useAppSelector } from "../../redux/hooks.types";
import { ProductItemType } from "../../services/sales/types";
import { priceFormatter } from "../../utils/utils";

const PaymentMethod = () => {
  const navigate = useNavigate();

  // get data from store
  const client = useAppSelector((state) => state.cart.client);
  const products = useAppSelector((state) => state.cart.items);

  // hook to manage sale creation and callback functions
  const { mutateAsync: createSale, isLoading } = useCreateSale({
    // successfull creation
    onSuccess: (resp) => {
      //   go to payment confirmation
      navigate(routes.paymentConfirmation);
    },
    onError: () => {
      // message to user
      alert("Something went wrong, try again!");
    },
  });

  // client form
  const { control, handleSubmit } = useForm<PaymentFormType>({
    defaultValues: initialState,
    mode: "onChange",
  });

  const pay = () => {
    // As this is just a demo, in real app maybe this can redirect to a payment system using the data
    handleSubmit(() => {
      // do request on db to create sale order
      if (!!client) {
        // format products to just send required information
        const productsFormatted: ProductItemType[] = products.map(
          (product) => ({
            productId: product.id,
            quantity: product.quantity,
          })
        );

        // create sale on backend
        createSale({
          client: client,
          products: productsFormatted,
        });
      }
    })();
  };

  return (
    <>
      {!isLoading ? (
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>
            Payment information
          </Typography>

          {/* payment method form */}
          <Box>
            {/* name on card */}
            <Controller
              name="nameOnCard"
              rules={{ required: { message: "It is required", value: true } }}
              control={control}
              render={({
                field: { value, onChange, name },
                formState: { errors },
              }) => (
                <>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Name on card"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                  <Typography variant="body2" color="error.main">
                    {errors[name]?.message}
                  </Typography>
                </>
              )}
            />

            {/* card number */}
            <Controller
              name="cardNumber"
              rules={{ required: { message: "It is required", value: true } }}
              control={control}
              render={({
                field: { value, onChange, name },
                formState: { errors },
              }) => (
                <>
                  <TextField
                    label="Card number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                  <Typography variant="body2" color="error.main">
                    {errors[name]?.message}
                  </Typography>
                </>
              )}
            />

            {/* expiration month */}
            <Controller
              name="expMonth"
              rules={{ required: { message: "It is required", value: true } }}
              control={control}
              render={({
                field: { value, onChange, name },
                formState: { errors },
              }) => (
                <>
                  <TextField
                    label="Exp month"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                  <Typography variant="body2" color="error.main">
                    {errors[name]?.message}
                  </Typography>
                </>
              )}
            />

            {/* exp day */}
            <Controller
              name="expDay"
              rules={{ required: { message: "It is required", value: true } }}
              control={control}
              render={({
                field: { value, onChange, name },
                formState: { errors },
              }) => (
                <>
                  <TextField
                    label="Exp day"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                  <Typography variant="body2" color="error.main">
                    {errors[name]?.message}
                  </Typography>
                </>
              )}
            />

            {/* cvv */}
            <Controller
              name="cvv"
              rules={{ required: { message: "It is required", value: true } }}
              control={control}
              render={({
                field: { value, onChange, name },
                formState: { errors },
              }) => (
                <>
                  <TextField
                    label="cvv"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                  <Typography variant="body2" color="error.main">
                    {errors[name]?.message}
                  </Typography>
                </>
              )}
            />
          </Box>

          {/* total amount to pay */}
          <Alert severity="info" sx={{ margin: "10px 0px 20px 0px" }}>
            Total to pay:{" "}
            {priceFormatter.format(
              products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
            )}
          </Alert>

          {/* button to pay */}
          <Button variant="contained" onClick={pay}>
            <AttachMoneyIcon />
            Pay
          </Button>

          {/*  */}
        </Container>
      ) : (
        <CircularProgress size={50} />
      )}
    </>
  );
};

export default PaymentMethod;
