import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import SellerReturnTable from "../../Components/Seller Components/Seller_Return_Table";
import { Typography, Container } from "@mui/material";

const SellerReturn = () => {
  return (
    <div>
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
        <Container sx={{ marginTop: "20px" }}>
          <h1>Seller Returns</h1>
          <Typography variant="h6" margin="20px 0 10px 0">
            Seller Return Table
          </Typography>
          <SellerReturnTable />
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerReturn;
