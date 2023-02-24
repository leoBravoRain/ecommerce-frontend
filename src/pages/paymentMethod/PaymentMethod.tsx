import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { PaymentFormType } from "./types";
import { initialState } from "./constants";
import { routes } from "../../config/routes";
import { useCreateSale } from "../../services/sales/sales";
import { useAppSelector } from "../../redux/hooks.types";
import { ProductItemType } from "../../services/sales/types";

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
            product: product._id,
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
        <Container>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginY: "20px", marginLeft: "15px" }}
          >
            PaymentMethod
          </Typography>
          <Container>
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
          </Container>
        </Container>
      ) : (
        <CircularProgress size={50} />
      )}

      {/* button to pay */}
      <Button variant="contained" onClick={pay}>
        Pay
      </Button>
    </>
  );
};

export default PaymentMethod;
