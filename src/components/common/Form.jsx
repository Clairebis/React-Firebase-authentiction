import { Box, TextField } from "@mui/material";
import Button from "./Button";

export default function BasicTextFields({
  title,
  setEmail,
  setPassword,
  handleAction,
}) {
  return (
    <div>
      <div className="heading-container">
        <h3>{title} Form</h3>
      </div>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>

      <Button title={title} handleAction={handleAction} />
    </div>
  );
}
