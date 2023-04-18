import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import TabPanel from "../../Components/Seller Components/Seller_Inventory_Tab";
import { Container, Typography, Button, Grid, Box } from "@mui/material";

const SellerInventory = () => {
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
        {/* Seller Inventory Content */}
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h1>Seller Inventory</h1>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8080D7",
                "&:hover": { backgroundColor: "#8080D7" },
                margin: "20px 0 0 0",
              }}
            >
              Add Products
            </Button>
          </Grid>
          <Typography variant="h6" margin="20px 0 10px 0">
            Seller Inventory Table
          </Typography>
          <TabPanel />
        </Container>
      </Container>
      <Footer />
    </Box>
  );
};

export default SellerInventory;
