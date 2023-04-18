import React from "react";
import TextField from "@mui/material/TextField";
import AdminHeader from "../../Components/Admin Components/Admin_Header";
import AdminNavbar from "../../Components/Admin Components/Admin_Navbar";
import AdminSideNav from "../../Components/Admin Components/Admin_SideNav";
import Footer from "../../Components/Global Components/Footer";
import { Container, Box, Typography, Grid, Button } from "@mui/material";

const AdminLoginPassword = () => {
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
        {/* Admin Login & Password Page Content */}
        <Container sx={{ paddingTop: "20px" }}>
          <Box>
            <Typography variant="h4" fontWeight="bold" marginBottom={3}>
              Password & Login
            </Typography>
            {/* Reset Password Grid */}
            <Grid marginBottom={5}>
              <Grid item margin="10px 0 30px 0">
                <Typography fontWeight="500" fontSize="20px" mb={1}>
                  Reset Password
                </Typography>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Current password"
                  variant="outlined"
                  sx={{ width: 300 }}
                />
                <Typography fontSize="12px" mt="4px" color="#818181">
                  Minimum 8 and maximum 25 characters
                </Typography>
              </Grid>
              <Grid item margin="10px 0 16px 0">
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="New password"
                  variant="outlined"
                  sx={{ width: 300 }}
                />
              </Grid>
              <Grid>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Confirm new password"
                  variant="outlined"
                  sx={{ marginRight: "30px", width: 300 }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#8080D7",
                    "&:hover": {
                      backgroundColor: "#8080D7",
                    },
                  }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>

            {/* Two Factor Authentication Grid */}
            <Grid marginBottom={5}>
              <Grid item margin="10px 0 30px 0">
                <Typography fontWeight="500" fontSize="20px" mb={1}>
                  Two Factor Authentication
                </Typography>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Current email"
                  variant="outlined"
                  sx={{ width: 300 }}
                />
                <Typography fontSize="12px" mt="4px" color="#818181">
                  *Verification code will be sent by email
                </Typography>
              </Grid>
              <Grid item margin="10px 0 16px 0">
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Current password"
                  variant="outlined"
                  sx={{ width: 300 }}
                />
              </Grid>
              <Grid>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Varification Code"
                  variant="outlined"
                  sx={{ marginRight: "30px", width: 300 }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#8080D7",
                    "&:hover": {
                      backgroundColor: "#8080D7",
                    },
                  }}
                >
                  Activate
                </Button>
              </Grid>
            </Grid>

            {/* Update Email Grid */}
            <Grid marginBottom={5}>
              <Grid item margin="10px 0 30px 0">
                <Typography fontWeight="500" fontSize="20px" mb={1}>
                  Update email
                </Typography>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Current email"
                  variant="outlined"
                  sx={{ width: 300 }}
                />
                <Typography fontSize="12px" mt="4px" color="#818181">
                  Minimum 8 and maximum 25 characters
                </Typography>
              </Grid>
              <Grid item margin="10px 0 16px 0">
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="New email"
                  variant="outlined"
                  sx={{ width: 300 }}
                />
              </Grid>
              <Grid>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Current password"
                  variant="outlined"
                  sx={{ marginRight: "30px", width: 300 }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#8080D7",
                    "&:hover": {
                      backgroundColor: "#8080D7",
                    },
                  }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default AdminLoginPassword;
