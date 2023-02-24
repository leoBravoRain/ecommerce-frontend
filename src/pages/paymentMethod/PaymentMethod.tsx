import { Button, Container, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { PaymentFormType } from "./types";
import { initialState } from "./constants";

const PaymentMethod = () => {
  // client form
  const { control, handleSubmit } = useForm<PaymentFormType>({
    defaultValues: initialState,
    mode: "onChange",
  });

  const pay = () => {
    handleSubmit((data) => {
      // As this is just a demo, in real app maybe this can redirect to a payment system using the data
      
      //   go to payment confirmation
    })();
  };

  return (
    <>
      {/* company title */}
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

      {/* button to pay */}
      <Button variant="contained" onClick={pay}>
        Pay
      </Button>
    </>
  );
};

export default PaymentMethod;
