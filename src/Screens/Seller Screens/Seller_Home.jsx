import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import { Container } from "@mui/material";

const SellerHome = () => {
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
        <Container>
          <h3>This is Seller Home Page.</h3>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerHome;
