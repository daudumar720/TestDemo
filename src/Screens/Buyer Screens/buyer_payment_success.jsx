import React from "react";
import { Grid, Box, Typography, Button, Container, Stack } from "@mui/material";
import BuyerNavbar from "./../../Components/Buyer Components/Buyer_Navbar";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Footer from "./../../Components/Global Components/Footer";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
};

const BuyerPaymentSuccess = () => {
  return (
    <div>
      <BuyerNavbar />
      <Grid sx={header} container alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h4" fontWeight="bold" color="#fff">
            Payments
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Box marginY={5}>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <CheckCircleOutlinedIcon
              sx={{ color: "#01D28E", width: "240px", height: "240px" }}
            />
            <Typography variant="h4">Payment Completed Successfully</Typography>
            <Typography variant="h5" color="#8080D7">
              Thank you for shopping.
            </Typography>
            <Typography variant="body2" color="#818181">
              Receipt and shipping details will be sent to you shortly via email
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#8080D7",
                "&:hover": { backgroundColor: "#8080D7" },
                margin: "20px 0 0 0",
              }}
            >
              Return to home
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default BuyerPaymentSuccess;
