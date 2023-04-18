import React from "react";
import {
  Container,
  Grid,
  styled,
  Typography,
  TextField,
  Box,
  InputAdornment,
  Button,
} from "@mui/material";
import AdminHeader from "../../Components/Admin Components/Admin_Header";
import AdminNavbar from "../../Components/Admin Components/Admin_Navbar";
import AdminSideNav from "../../Components/Admin Components/Admin_SideNav";
import SendIcon from "@mui/icons-material/Send";
import NFTCard from "../../Components/Global Components/NFT_Card";
import Footer from "../../Components/Global Components/Footer";

const AdminDisputeDetail = () => {
  const SubHeading = styled(Typography)({
    fontWeight: "bold",
    fontSize: "16px",
  });
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
        {/* Admin Disputes Details Content */}
        <Container sx={{ paddingTop: "20px" }}>
          <Grid container justifyContent="space-around">
            {/* Typograpy Content */}
            <Box>
              <Box marginBottom={3}>
                <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                  Disputes Details
                </Typography>
                <SubHeading>Product Link</SubHeading>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    color: "#8080D7",
                    fontSize: "14px",
                  }}
                >
                  Hendrerit interdum sit massa lobortis.
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <SubHeading>Complainter Email</SubHeading>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    color: "#8080D7",
                    fontSize: "14px",
                  }}
                >
                  daudumar@gmail.com
                </Typography>
              </Box>
              <Box>
                <SubHeading>Complainter Email</SubHeading>
                <Typography fontSize="14px" color="#818181" width="400px">
                  Hendrerit interdum sit massa lobortis. Habitant faucibus lorem
                  dui mauris. Pellentesque nunc, tortor quam consequat odio. Sed
                  faucibus id rhoncus, scelerisque tristique ultricies nam.
                </Typography>
              </Box>
              <Box margin="20px 0 20px 0">
                <Typography variant="h5" fontWeight="bold" marginBottom={3}>
                  Disputes Details
                </Typography>
                <Grid container columnGap={5} marginBottom={3}>
                  <Grid>
                    <SubHeading>Complaint</SubHeading>
                    <Typography color="#818181" fontSize="11px">
                      12:30 am 10 july, 2020
                    </Typography>
                  </Grid>
                  <Typography fontSize="14px" color="#818181" width="300px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio.
                  </Typography>
                </Grid>
                <Grid container columnGap={5} marginBottom={3}>
                  <Grid>
                    <SubHeading marginRight="34px">Seller</SubHeading>
                    <Typography color="#818181" fontSize="11px">
                      12:30 am 10 july, 2020
                    </Typography>
                  </Grid>
                  <Typography fontSize="14px" color="#818181" width="300px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio.
                  </Typography>
                </Grid>
                <Grid container columnGap={5} marginBottom={3}>
                  <SubHeading marginRight="60px">Admin</SubHeading>
                  <TextField
                    id="outlined-basic"
                    label="Send Message..."
                    variant="outlined"
                    sx={{ width: "240px" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SendIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#8080D7",
                    "&:hover": { backgroundColor: "#8080D7" },
                  }}
                >
                  Mark as read
                </Button>
              </Box>
            </Box>

            {/* Card */}
            <Box>
              <Typography fontSize="20px" fontWeight="bold" marginBottom={3}>
                Preview
              </Typography>
              <NFTCard />
            </Box>
          </Grid>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default AdminDisputeDetail;
