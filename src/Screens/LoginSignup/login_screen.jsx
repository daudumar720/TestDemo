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
import Tabpanel from "../../Components/LoginSignup Components/Login_Tab";

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
  width: "600px",
  height: "600px",
};

const LoginScreen = () => {
  const MySpan = styled("span")({
    color: "#8080D7",
  });
  return (
    // Login Model Content
    <Box sx={style}>
      <Grid container justifyContent="center">
        <Grid>
          <Typography variant="h2" marginBottom="20px">
            Sign In
          </Typography>
          <Tabpanel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;
