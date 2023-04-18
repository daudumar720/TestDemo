import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  styled,
  Divider,
  Button,
} from "@mui/material";
import BuyerNavbar from "./../../Components/Buyer Components/Buyer_Navbar";
import Footer from "./../../Components/Global Components/Footer";
import CartCard from "../../Components/Global Components/Cart_Card";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
  zIndex: "-1",
  position: "absolute",
};
const ImgTag = styled("img")({
  borderRadius: 50,
});

const BuyerCart = () => {
  return (
    <div>
      <BuyerNavbar />
      <Grid
        sx={header}
        container
        alignItems="center"
        justifyContent="flex-start"
      >
        <Container maxWidth="xl">
          <Grid item>
            <Typography variant="h4" fontWeight="bold" color="#fff">
              Cart
            </Typography>
          </Grid>
        </Container>
      </Grid>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          paddingTop: "20px",
          marginTop: "120px",
          paddingBottom: "50px",
          borderRadius: "8px",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h5" fontWeight="bold" marginY={1}>
              Cart Items
            </Typography>
            <Divider />
          </Box>
          <Grid container justifyContent="space-between" marginY="20px">
            {/* Cart Items Box */}
            <Grid>
              <Box>
                <CartCard />
                <Divider />
                <CartCard />
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
                </Container>
                <Divider width="80%" sx={{ margin: "auto" }} />
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography fontWeight="bold">Total Products</Typography>
                    </Grid>
                    <Grid>
                      <Typography fontWeight="bold">2</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography fontWeight="bold">Product Price</Typography>
                    </Grid>
                    <Grid>
                      <Typography fontWeight="bold">$ 1.45</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography fontWeight="bold">Delivery Fee</Typography>
                    </Grid>
                    <Grid>
                      <Typography fontWeight="bold">Free</Typography>
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
                    Checkout
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default BuyerCart;
