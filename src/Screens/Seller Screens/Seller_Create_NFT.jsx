import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";

const SellerCreateNFT = () => {
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
          <Typography variant="h4" fontWeight="bold">
            Create New NFT
          </Typography>
          <Typography marginY="20px">
            <h3>Upload File</h3>
            <Typography variant="body2" color="#818181">
              We recommend an image of at least 400x400. Gifs work too :)
            </Typography>
          </Typography>

          <Typography mt="20px">
            <h2>Details</h2>
          </Typography>

          <Grid container justifyContent="space-between" mb="20px">
            <Grid>
              <Typography variant="body2" fontWeight="bold" marginY="20px">
                Full Name
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                label="Daoud umar"
                variant="outlined"
                sx={{ width: "540px" }}
              />
              <Typography variant="body2" mt={1} color="#818181">
                Maximum 100 characters. No HTML or emoji allowed.
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body2" fontWeight="bold" marginY="20px">
                Full Name
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                label="Daoud umar"
                variant="outlined"
                sx={{ width: "540px" }}
              />
            </Grid>
          </Grid>
          {/* Descr Box */}
          <Grid>
            <Typography
              variant="body2"
              fontWeight="bold"
              marginBottom="20px"
              marginTop="20px"
            >
              Description
            </Typography>

            <TextField
              size="small"
              id="outlined-basic"
              label="example@gmail.com"
              variant="outlined"
              InputProps={{ sx: { height: 160 } }}
              sx={{ width: "70%" }}
            />
            <Typography fontSize="12px" mt="4px" color="#818181">
              0 of 500 characters used.
            </Typography>
          </Grid>
          {/* Lower Content */}
          <Typography mt="20px">
            <h2>Price & Payment Options</h2>
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid>
              <Typography
                variant="body2"
                fontWeight="bold"
                marginBottom="20px"
                marginTop="20px"
              >
                Full Name
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                label="Daoud umar"
                variant="outlined"
                sx={{ width: "540px" }}
              />
              <Typography
                variant="body2"
                fontWeight="bold"
                marginBottom="20px"
                marginTop="20px"
              >
                UID
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                label="2673827349"
                variant="outlined"
                sx={{ width: "540px" }}
              />
            </Grid>
            <Grid>
              <Typography
                variant="body2"
                fontWeight="bold"
                marginBottom="20px"
                marginTop="20px"
              >
                Username
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                label="daud_umar1"
                variant="outlined"
                sx={{ width: "540px" }}
              />
              <Typography
                variant="body2"
                fontWeight="bold"
                marginBottom="20px"
                marginTop="20px"
              >
                Email
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                label="example@gmail.com"
                variant="outlined"
                sx={{ width: "540px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              sx={{
                mt: "40px",
                width: "60%",
                backgroundColor: "#8080D7",
                "&:hover": { backgroundColor: "#8080D7" },
              }}
            >
              Create NFT
            </Button>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerCreateNFT;
