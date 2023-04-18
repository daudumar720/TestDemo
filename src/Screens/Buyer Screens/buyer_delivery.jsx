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
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Footer from "./../../Components/Global Components/Footer";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
};

const BuyerDelivery = () => {
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
              <Typography variant="h4">Enter shipping details</Typography>
              <Box marginY={3}>
                <TextField
                  size="medium"
                  id="outlined-basic"
                  //   label="email"
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
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box marginY={3}>
                <TextField
                  size="medium"
                  id="outlined-basic"
                  placeholder="address"
                  variant="outlined"
                  sx={{
                    // width: { xs: "70%", md: "50%", lg: "30%" },
                    width: "460px",
                    marginTop: "6px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box marginY={3}>
                <TextField
                  size="medium"
                  id="outlined-basic"
                  placeholder="street address (optional)"
                  variant="outlined"
                  sx={{
                    // width: { xs: "70%", md: "50%", lg: "30%" },
                    width: "460px",
                    marginTop: "6px",
                  }}
                />
              </Box>
              <Box marginY={3}>
                <Autocomplete
                  size="small"
                  disablePortal
                  id="combo-box-demo"
                  options={country}
                  sx={{
                    // width: { xs: "70%", md: "50%", lg: "30%" },
                    width: "260px",
                    marginTop: "6px",
                  }}
                  renderInput={(params) => (
                    <TextField
                      InputProps={{
                        sx: { height: "48px", borderRadius: "8px" },
                      }}
                      {...params}
                      label="Country"
                    />
                  )}
                />
              </Box>
              <Box marginY={3}>
                <Grid container columnGap="20px">
                  <TextField
                    size="medium"
                    id="outlined-basic"
                    placeholder="City"
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
                    placeholder="Zip code"
                    variant="outlined"
                    sx={{
                      // width: { xs: "34%", md: "24%", lg: "14%" },
                      width: "220px",
                      marginTop: "6px",
                    }}
                  />
                </Grid>
              </Box>
              <FormControlLabel
                sx={{ color: "#818181" }}
                value="end"
                control={
                  <Checkbox
                    sx={{
                      color: "#818181",
                      "&.Mui-checked": {
                        color: "#8080D7",
                      },
                    }}
                  />
                }
                label="Remember address"
                labelPlacement="end"
              />
            </Grid>

            {/* Delivery Main Box */}
            <Grid>
              {/* Delivery option Box */}
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
                  <Typography mt={1} width="120px" variant="body1">
                    TCS Delivery
                  </Typography>
                  <Typography
                    width="120px"
                    variant="caption"
                    color="#818181"
                    fontWeight="bold"
                  >
                    Shipping cost $10
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize="12px"
                    width="120px"
                    color="#818181"
                  >
                    Estimated shipping time: 24 hours
                  </Typography>
                </Grid>
              </Box>
              <Box
                marginY={3}
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
                  <Typography mt={1} width="120px" variant="body1">
                    TCS Delivery
                  </Typography>
                  <Typography
                    width="120px"
                    variant="caption"
                    color="#818181"
                    fontWeight="bold"
                  >
                    Shipping cost $10
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize="12px"
                    width="120px"
                    color="#818181"
                  >
                    Estimated shipping time: 24 hours
                  </Typography>
                </Grid>
              </Box>
              <Box
                marginY={3}
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
                  <Typography mt={1} width="120px" variant="body1">
                    TCS Delivery
                  </Typography>
                  <Typography
                    width="120px"
                    variant="caption"
                    color="#818181"
                    fontWeight="bold"
                  >
                    Shipping cost $10
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize="12px"
                    width="120px"
                    color="#818181"
                  >
                    Estimated shipping time: 24 hours
                  </Typography>
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

export default BuyerDelivery;
const country = [
  { label: "Pakistan" },
  { label: "Australia" },
  { label: "USA" },
];
