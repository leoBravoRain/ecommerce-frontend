import { Button, Container, TextField, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../redux/hooks.types";

import { Controller, useForm } from "react-hook-form";
import { ClientFormType } from "./types";
import { initialState } from "./constants";
import { addClient } from "../../redux/reducers/cart/cartSlice";

import ProductsTable from "./components/productsTable/ProductsTable";

const Checkout = () => {
  // get items from cart
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  // client form
  const { control, handleSubmit } = useForm<ClientFormType>({
    defaultValues: initialState,
    mode: "onChange",
  });

  const goToPayment = () => {
    handleSubmit((data) => {
      // add client data to cart store
      dispatch(addClient(data));

      // go to payment page
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
        Checkout
      </Typography>

      {/* list of products */}
      <ProductsTable items={cartItems} />

      {/* client form */}
      <Container>
        {/* first name */}
        <Controller
          name="firstName"
          rules={{ required: { message: "It is required", value: true } }}
          control={control}
          render={({
            field: { value, onChange, name },
            formState: { errors },
          }) => (
            <>
              <TextField
                label="First name"
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

        {/* last name */}
        <Controller
          name="lastName"
          rules={{ required: { message: "It is required", value: true } }}
          control={control}
          render={({
            field: { value, onChange, name },
            formState: { errors },
          }) => (
            <>
              <TextField
                label="Last name"
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

        {/* address */}
        <Controller
          name="address"
          rules={{ required: { message: "It is required", value: true } }}
          control={control}
          render={({
            field: { value, onChange, name },
            formState: { errors },
          }) => (
            <>
              <TextField
                label="Address"
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

        {/* city */}
        <Controller
          name="city"
          rules={{ required: { message: "It is required", value: true } }}
          control={control}
          render={({
            field: { value, onChange, name },
            formState: { errors },
          }) => (
            <>
              <TextField
                label="City"
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

        {/* state */}
        <Controller
          name="state"
          rules={{ required: { message: "It is required", value: true } }}
          control={control}
          render={({
            field: { value, onChange, name },
            formState: { errors },
          }) => (
            <>
              <TextField
                label="State"
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

        {/* zip code */}
        <Controller
          name="zipCode"
          rules={{ required: { message: "It is required", value: true } }}
          control={control}
          render={({
            field: { value, onChange, name },
            formState: { errors },
          }) => (
            <>
              <TextField
                label="Zip code"
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

        {/* Phone number */}
        <Controller
          name="phoneNumber"
          rules={{ required: { message: "It is required", value: true } }}
          control={control}
          render={({
            field: { value, onChange, name },
            formState: { errors },
          }) => (
            <>
              <TextField
                label="Phone number"
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
      <Button variant="contained" onClick={goToPayment}>
        Pay
      </Button>
    </>
  );
};

export default Checkout;
