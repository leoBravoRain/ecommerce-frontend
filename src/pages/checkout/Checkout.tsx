import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { useAppDispatch, useAppSelector } from "../../redux/hooks.types";

import { ClientFormType } from "./types";
import { initialState } from "./constants";
import { addClient } from "../../redux/reducers/cart/cartSlice";

import ProductsTable from "./productsTable/ProductsTable";
import { routes } from "../../config/routes";

const Checkout = () => {
  // get items from cart
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      navigate(routes.paymentMethods);
    })();
  };

  return (
    <Container maxWidth="sm">
      {/* company title */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginY: "20px", marginLeft: "15px" }}
      >
        Checkout
      </Typography>

      {/* list of products */}
      <Box marginBottom={5}>
        {/* title */}
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ marginY: "20px", marginLeft: "15px" }}
        >
          Your products
        </Typography>

        {/* products */}
        <ProductsTable items={cartItems} />
      </Box>

      {/* client form */}
      <Box>
        {/* title */}
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ marginY: "20px", marginLeft: "15px" }}
        >
          Your information
        </Typography>

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
                fullWidth
                margin="normal"
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
                fullWidth
                margin="normal"
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
                fullWidth
                margin="normal"
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
                fullWidth
                margin="normal"
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
                fullWidth
                margin="normal"
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
                fullWidth
                margin="normal"
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
                fullWidth
                margin="normal"
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
      </Box>

      {/* button to pay */}
      <Button variant="contained" onClick={goToPayment}>
        <AttachMoneyIcon />
        Pay
      </Button>
    </Container>
  );
};

export default Checkout;
