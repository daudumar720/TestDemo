import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import Footer from "../../Components/Global Components/Footer";
import {
  Container,
  Box,
  Typography,
  Grid,
  styled,
  Button,
  TextField,
} from "@mui/material";

const SellerProfileSetting = () => {
  const ImgTag = styled("img")({
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 20,
  });
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
          <Typography variant="h4" fontWeight="bold" marginBottom={3}>
            Profile & Settings
          </Typography>
          <Box
            sx={{
              maxWidth: "100%",
              backgroundColor: "#D1D1D1",
              opacity: "50%",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            {/* Profile Box Content */}
            <Box>
              <Grid container alignItems="center" columnGap={2} paddingY="50px">
                <ImgTag
                  src={require("../../Images/images.jpeg")}
                  alt="avatar"
                  width="80px"
                  height="80px"
                />
                <Box>
                  <Grid>
                    <Grid container columnGap={2}>
                      <Button variant="outlined" sx={{ color: "#8080D7" }}>
                        <Grid container columnGap={1} padding="2px">
                          <CachedOutlinedIcon />
                          Change avatar
                        </Grid>
                      </Button>

                      <Button variant="outlined" color="error">
                        <Grid container columnGap={1} padding="2px">
                          <DeleteForeverOutlinedIcon />
                          Delete
                        </Grid>
                      </Button>
                    </Grid>
                    <Typography fontSize="12px" mt="4px" color="#818181">
                      We recommend an image of at least 400x400. Gifs work
                      too...
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Box>

          {/* Profile Bio content */}
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

          {/* Profile Lower content */}
          <Grid container justifyContent="space-between" marginY="50px">
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
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8080D7",
              "&:hover": { backgroundColor: "#8080D7" },
            }}
          >
            Update Profile
          </Button>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerProfileSetting;
