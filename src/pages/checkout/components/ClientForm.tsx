import { Container, TextField } from "@mui/material";

const ClientForm = () => {
  return (
    <Container>
      {/* first name */}
      <TextField label="First name" variant="outlined" />

      {/* last name */}
      <TextField label="Last name" variant="outlined" />

      {/* address */}
      <TextField label="Address" variant="outlined" />

      {/* city */}
      <TextField label="City" variant="outlined" />

      {/* state */}
      <TextField label="State" variant="outlined" />

      {/* zip code */}
      <TextField label="Zip code" variant="outlined" />

      {/* Phone number */}
      <TextField label="Phone number" variant="outlined" />
    </Container>
  );
};

export default ClientForm;
