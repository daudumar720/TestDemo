import React from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  Grid,
  styled,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  marginTop: "40px",
  //   boxShadow: 1,
  p: 4,
  borderRadius: 1,
};

const AdminLoginScreen = () => {
  const MySpan = styled("span")({
    color: "#8080D7",
  });
  return (
    // Login Model Content
    <Grid container justifyContent="center">
      <Box sx={style} width="320px">
        <Grid container justifyContent="space-between">
          <Grid>
            <Typography variant="h4">Admin</Typography>
          </Grid>
          <Grid container>
            <Typography
              marginBottom={4}
              sx={{ color: "#818181", fontSize: "14px", paddingTop: "10px" }}
            >
              Please enter your login details to sign in.
            </Typography>
          </Grid>
        </Grid>

        {/* Input Text Grids */}
        <Grid container marginBottom="20px">
          <Grid marginBottom="20px">
            <TextField
              variant="outlined"
              sx={{ width: 320 }}
              label="Email"
              size="small"
            ></TextField>
          </Grid>
          <Grid container>
            <TextField
              variant="outlined"
              sx={{ width: 320 }}
              label="Password"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOffIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          marginBottom="20px"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* CheckBox */}
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: "#8080D7",
                  "&.Mui-checked": {
                    color: "#8080D7",
                  },
                }}
              />
            }
            label={
              <Typography marginTop={1} color="#818181" fontSize="12px">
                Keep me logged in
              </Typography>
            }
          />
          <Typography marginTop={1} color="#8080D7" fontSize="12px">
            Forgot Password?
          </Typography>
        </Grid>
        {/* Add Button */}
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            sx={{
              width: "320px",
              backgroundColor: "#8080D7",
              "&:hover": { backgroundColor: "#8080D7" },
            }}
          >
            Sign In
          </Button>
        </Grid>
        {/* <Typography marginTop="10px" fontSize="12px" color="#818181">
          Don’t have an account? <MySpan>Sign up</MySpan>
        </Typography> */}
      </Box>
    </Grid>
  );
};

export default AdminLoginScreen;
