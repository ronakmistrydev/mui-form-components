import { TextField } from '@mui/material';

export function EmailInputField() {
  return (
    <TextField
      fullWidth
      id="email"
      label="Email"
      type="email"
      variant="outlined"
    />
  );
}
