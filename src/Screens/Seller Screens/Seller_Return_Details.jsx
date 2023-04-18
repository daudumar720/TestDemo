import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import {
  Container,
  Stack,
  Typography,
  Box,
  TextField,
  Grid,
  Button,
} from "@mui/material";

const SellerReturnDetail = () => {
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
        <Container sx={{ paddingTop: "20px" }}>
          <Grid container justifyContent="space-between">
            <Grid>
              {/* Image Box */}
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Return Details
                </Typography>
                <Box marginTop="10px" />
                <img
                  src={require("../../Images/nft_card_1.jpg")}
                  alt="nft_card"
                  width="400px"
                  height="400px"
                />
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Email
                  </Typography>
                  <Typography
                    fontSize="14px"
                    color="#8080D7"
                    sx={{ textDecoration: "underline" }}
                  >
                    daudumar@gmail.com
                  </Typography>
                </Stack>
                <Stack margin="20px 0 10px 0">
                  <Typography fontSize="16px" fontWeight="bold">
                    Description
                  </Typography>
                  <Typography fontSize="14px" color="#818181" width="400px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid margin="40px 260px 0 0">
              {/* Data Box */}
              <Box>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Product Name
                  </Typography>
                  <Typography fontSize="14px" color="#818181">
                    Fire TV Stick
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Order Id
                  </Typography>
                  <Typography fontSize="14px" color="#818181">
                    102
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Request Id
                  </Typography>
                  <Typography fontSize="14px" color="#818181">
                    1124
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Price
                  </Typography>
                  <Typography fontSize="14px" color="#818181">
                    $20
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Order No
                  </Typography>
                  <Typography fontSize="14px" color="#818181">
                    1020
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Reason
                  </Typography>
                  <Typography fontSize="14px" color="#818181">
                    dafsf sfsda adad hnmm.
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Status
                  </Typography>
                  <Typography fontSize="14px" color="#818181">
                    <TextField
                      id="outlined-basic"
                      label="Pending"
                      variant="outlined"
                      size="small"
                    />
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontSize="16px" fontWeight="bold">
                    Details
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Enter details..."
                    variant="outlined"
                    size="small"
                  />
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#8080D7",
                    "&:hover": { backgroundColor: "#8080D7" },
                    margin: "20px 0 0 0",
                  }}
                >
                  Update
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerReturnDetail;
