import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import AdminHeader from "../../Components/Admin Components/Admin_Header";
import AdminNavbar from "../../Components/Admin Components/Admin_Navbar";
import AdminSideNav from "../../Components/Admin Components/Admin_SideNav";
import Footer from "../../Components/Global Components/Footer";
import AdminPaymentTable from "../../Components/Admin Components/Admin_Payment_Table";
import TabPanel from "../../Components/Admin Components/Admin_Payment_Tab";

const AdminPayments = () => {
  return (
    <div>
      {/* Admin Navbar */}
      <AdminNavbar />

      {/* Admin Header */}
      <AdminHeader />

      {/* Admin Payments Page Main Container */}
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
        {/* Admin Shipping Information Content Container */}
        <Container>
          <Grid container justifyContent="space-between">
            {/* Heading Grid */}
            <Grid item>
              <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Payments
              </Typography>
            </Grid>
            <Grid container>
              <TabPanel />
            </Grid>
          </Grid>
          {/* Shipping Table */}
          <Typography fontWeight={500} fontSize="18px" margin="20px 0 10px 0">
            Payments Table
          </Typography>
          <AdminPaymentTable />
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default AdminPayments;
