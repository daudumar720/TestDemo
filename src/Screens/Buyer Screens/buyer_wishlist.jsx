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
import WishlistCard from "../../Components/Global Components/Wishlist_Cart";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
  zIndex: "-1",
  position: "absolute",
};
const ImgTag = styled("img")({
  borderRadius: 50,
});

const Wishlist = () => {
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
              My Wishlist
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
              Wislist Items
            </Typography>
            <Divider />
          </Box>
          {/* Cart Items Box */}
          <Grid>
            <Box>
              <WishlistCard />
              <WishlistCard />
            </Box>
          </Grid>
        </Container>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Wishlist;
