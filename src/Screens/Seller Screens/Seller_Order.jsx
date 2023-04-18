import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import TabPanel from "../../Components/Seller Components/Seller_Order_Tab";
import { Container, Typography, Grid, Box } from "@mui/material";

const SellerOrder = () => {
  return (
    <Box>
      <SellerNavBar />
      <SellerHeader />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          marginTop: "160px",
          paddingTop: "20px",
          paddingBottom: "50px",
          borderRadius: "8px",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        {/* Side Nav Component */}
        <SellerSideNav />
        {/* Seller Orders Content */}
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h1>Seller Inventory</h1>
          </Grid>
          <Typography variant="h6" margin="20px 0 10px 0">
            Seller Orders Table
          </Typography>
          <TabPanel />
        </Container>
      </Container>
      <Footer />
    </Box>
  );
};

export default SellerOrder;
