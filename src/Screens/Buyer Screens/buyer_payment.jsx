import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Autocomplete,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import BuyerNavbar from "./../../Components/Buyer Components/Buyer_Navbar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Footer from "./../../Components/Global Components/Footer";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
};

const BuyerPayment = () => {
  return (
    <div>
      <BuyerNavbar />

      {/* Header Grid */}
      <Grid
        sx={header}
        container
        alignItems="center"
        justifyContent="flex-start"
      >
        <Container maxWidth="xl">
          <Grid item>
            <Typography variant="h4" fontWeight="bold" color="#fff">
              Payments
            </Typography>
          </Grid>
        </Container>
      </Grid>

      {/* Content Container */}
      <Container maxWidth="xl">
        {/* Shipping detail Box */}
        <Box marginY={4}>
          <Grid container justifyContent="space-between">
            {/* Shipping detail Box Content */}
            <Grid>
              <Typography variant="h4">Enter payment details</Typography>
              <Grid container justifyContent="space-between">
                <Box
                  mt={6}
                  sx={{
                    width: "200px",
                    height: "12vh",
                    border: "2px solid #D1D1D1",
                    borderRadius: "6px",
                    "&:hover": {
                      borderColor: "#8080D7",
                    },
                  }}
                >
                  <Grid container justifyContent="center">
                    <img
                      src={require("../../Images/master_card.jpg")}
                      height="64px"
                      alt="master_card"
                    />
                    <Typography mt={1} variant="body1">
                      Master Card Payment
                    </Typography>
                  </Grid>
                </Box>
                <Box
                  mt={6}
                  sx={{
                    width: "200px",
                    height: "12vh",
                    border: "2px solid #D1D1D1",
                    borderRadius: "6px",
                    "&:hover": {
                      borderColor: "#8080D7",
                    },
                  }}
                >
                  <Grid container justifyContent="center">
                    <img
                      src={require("../../Images/visa_card.png")}
                      height="64px"
                      alt="master_card"
                    />
                    <Typography mt={1} variant="body1">
                      Master Card Payment
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
              <Box marginY={3}>
                <TextField
                  size="medium"
                  id="outlined-basic"
                  placeholder="phone number"
                  variant="outlined"
                  sx={{
                    // width: { xs: "70%", md: "50%", lg: "30%" },
                    width: "460px",
                    marginTop: "6px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography>MM/YY/CVC</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box marginY={3}>
                <Grid container columnGap="20px">
                  <TextField
                    size="medium"
                    id="outlined-basic"
                    placeholder="date of expiry"
                    variant="outlined"
                    sx={{
                      // width: { xs: "34%", md: "24%", lg: "14%" },
                      width: "220px",
                      marginTop: "6px",
                    }}
                  />
                  <TextField
                    size="medium"
                    id="outlined-basic"
                    placeholder="CVV"
                    variant="outlined"
                    sx={{
                      // width: { xs: "34%", md: "24%", lg: "14%" },
                      width: "220px",
                      marginTop: "6px",
                    }}
                  />
                </Grid>
              </Box>
            </Grid>

            {/* Billing Box */}
            <Grid>
              {/* Billing Box */}
              <Box
                sx={{
                  width: "420px",
                  paddingBottom: "20px",
                  border: "2px solid #D1D1D1",
                  borderRadius: "6px",
                }}
              >
                <Container sx={{ marginY: "20px" }}>
                  <Typography variant="h6" fontWeight="bold">
                    Enter your payment details
                  </Typography>
                  <Typography variant="body2" color="#818181">
                    Billing
                  </Typography>
                </Container>
                <Divider width="80%" sx={{ margin: "auto" }} />
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography fontWeight="bold">Item # 1</Typography>
                      <Typography variant="caption" color="#818181">
                        Item details are here...
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography fontWeight="bold">$ 1.45</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography fontWeight="bold">Item # 1</Typography>
                      <Typography variant="caption" color="#818181">
                        Item details are here...
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography fontWeight="bold">$ 1.45</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography fontWeight="bold">Item # 1</Typography>
                      <Typography variant="caption" color="#818181">
                        Item details are here...
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography fontWeight="bold">$ 1.45</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Divider width="80%" sx={{ margin: "auto" }} />
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography fontWeight="bold">Subtotal</Typography>
                    </Grid>
                    <Grid>
                      <Typography fontWeight="bold">$ 3.35</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Grid container justifyContent="center">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#8080D7",
                      "&:hover": { backgroundColor: "#8080D7" },
                      padding: "12px",
                    }}
                  >
                    Proceed to pay
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default BuyerPayment;
const country = [
  { label: "Pakistan" },
  { label: "Australia" },
  { label: "USA" },
];
