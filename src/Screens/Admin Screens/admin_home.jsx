import React from "react";
import { Container } from "@mui/material";
import AdminHeader from "../../Components/Admin Components/Admin_Header";
import AdminNavbar from "../../Components/Admin Components/Admin_Navbar";
import AdminSideNav from "../../Components/Admin Components/Admin_SideNav";
import Footer from "../../Components/Global Components/Footer";

const AdminHome = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminHeader />
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        {/* Side Nav Component */}
        <AdminSideNav />
        <Container>
          <h3>This is Admin Home Page.</h3>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default AdminHome;
