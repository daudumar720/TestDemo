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
} from "@mui/material";

const SellerOrderDetail = () => {
  return (
    <Box>
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
                  Orders Details
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
              <Grid container columnGap={12}>
                <Grid sx={{ marginTop: "16px" }}>
                  <Typography variant="body1" fontWeight="bold">
                    Product Name
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" marginTop={2}>
                    Collection
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" marginTop={2}>
                    Token Standard
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" marginTop={2}>
                    Blockchain
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" marginTop={2}>
                    Blockchain
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" marginTop={2}>
                    Blockchain
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" marginTop={2}>
                    Blockchain
                  </Typography>
                </Grid>
                <Grid sx={{ marginTop: "16px" }}>
                  <Typography color="#818181" variant="body1">
                    Fire TV Stick
                  </Typography>
                  <Typography color="#818181" variant="body1" marginTop={2}>
                    8508550793340827...
                  </Typography>
                  <Typography color="#818181" variant="body1" marginTop={2}>
                    ERC-1155
                  </Typography>
                  <Typography color="#818181" variant="body1" marginTop={2}>
                    Ethereum
                  </Typography>
                  <Typography color="#818181" variant="body1" marginTop={2}>
                    Ethereum
                  </Typography>
                  <Typography color="#818181" variant="body1" marginTop={2}>
                    Ethereum
                  </Typography>
                  <Typography color="#818181" variant="body1" marginTop={2}>
                    Ethereum
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </Box>
  );
};

export default SellerOrderDetail;
