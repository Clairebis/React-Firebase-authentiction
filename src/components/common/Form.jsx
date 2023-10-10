import { Box, TextField } from "@mui/material";
import Button from "./Button";

export default function BasicTextFields() {
  return (
    <div>
      <div className="heading-container">
        <h3>Login Form</h3>
      </div>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="email" label="Email" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
      </Box>

      <Button />
    </div>
  );
}