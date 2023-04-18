import React from "react";
import {
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AdminHeader from "../../Components/Admin Components/Admin_Header";
import AdminNavbar from "../../Components/Admin Components/Admin_Navbar";
import AdminSideNav from "../../Components/Admin Components/Admin_SideNav";
import SearchIcon from "@mui/icons-material/Search";
import AdminSellerTable from "../../Components/Admin Components/Admin_Seller_Table";
import Footer from "../../Components/Global Components/Footer";

const AdminSeller = () => {
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
        {/* Admin Shipping Information Content Container */}
        <Container sx={{ marginTop: "20px" }}>
          <Grid container justifyContent="space-between">
            {/* Heading Grid */}
            <Grid item>
              <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Sellers
              </Typography>
            </Grid>
            {/* Search Bar and Button Grid */}
            <Grid item>
              <TextField
                size="small"
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{ marginLeft: "30px", width: 220 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {/* Shipping Table */}
          <Typography fontWeight={500} fontSize="18px" margin="5px 0 10px 0">
            Sellers Information Table
          </Typography>
          <AdminSellerTable />
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default AdminSeller;
