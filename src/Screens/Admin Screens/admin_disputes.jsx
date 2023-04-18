import React from "react";
import { Container, Typography } from "@mui/material";
import AdminHeader from "../../Components/Admin Components/Admin_Header";
import AdminNavbar from "../../Components/Admin Components/Admin_Navbar";
import AdminSideNav from "../../Components/Admin Components/Admin_SideNav";
import Footer from "../../Components/Global Components/Footer";
import TabPanel from "../../Components/Admin Components/Admin_Dispute_Tab";

const AdminDisputes = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminHeader />
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
        <AdminSideNav />
        {/* Admin Dispute Page Main Content */}
        <Container>
          <Typography variant="h4" fontWeight="bold" marginBottom={3}>
            Disputes
          </Typography>
          {/* TabPanel Component */}
          <TabPanel />
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminDisputes;
