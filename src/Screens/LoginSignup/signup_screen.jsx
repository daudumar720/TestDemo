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
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  width: "30%",
  height: "600px",
};

const SignupScreen = () => {
  const MySpan = styled("span")({
    color: "#8080D7",
  });
  return (
    // Signup Model Content
    <Box sx={style} width="320px">
      <Grid container justifyContent="center">
        <Grid>
          <Typography variant="h5" fontWeight="bold">
            Sign Up
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            marginBottom={4}
            sx={{ color: "#818181", fontSize: "14px" }}
          >
            Create a new account!
          </Typography>
        </Grid>
      </Grid>

      {/* Input Text Grids */}
      <Grid container marginBottom="20px" justifyContent="center">
        <Grid marginBottom="20px">
          <TextField
            variant="outlined"
            sx={{ width: 320 }}
            label="Full Name"
            size="small"
          ></TextField>
        </Grid>
        <Grid marginBottom="20px">
          <TextField
            variant="outlined"
            sx={{ width: 320 }}
            label="Email"
            size="small"
          ></TextField>
        </Grid>
        <Grid container marginBottom="20px" justifyContent="center">
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
        <Grid container justifyContent="center">
          <TextField
            variant="outlined"
            sx={{ width: 320 }}
            label="Confirm Password"
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
      {/* Check Box */}
      <Grid
        justifyContent="center"
        container
        marginBottom="20px"
        alignItems="center"
        paddingRight={5}
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
              I agree to the Terms of Services and Policy
            </Typography>
          }
        />
      </Grid>
      {/* Add Button */}
      <Grid container direction="column">
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            sx={{
              width: "320px",
              backgroundColor: "#8080D7",
              "&:hover": { backgroundColor: "#8080D7" },
            }}
          >
            Create an account
          </Button>
        </Grid>
        <Grid container>
          <Grid container justifyContent="center">
            <Typography marginTop="10px" fontSize="12px" color="#818181">
              Already have an account? <MySpan>Sign in</MySpan>
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography marginTop="2px" fontSize="12px" color="#818181">
              OR? <MySpan>Become a seller</MySpan>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupScreen;
