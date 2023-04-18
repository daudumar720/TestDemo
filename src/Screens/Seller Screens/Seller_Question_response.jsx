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
  Grid,
  Divider,
} from "@mui/material";

const divStyle = {
  overflowY: "scroll",
  width: "100%",
  height: "620px",
};

const SellerQuestionResponse = () => {
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
                  Feedback
                </Typography>
                <Box marginTop="10px" />
                <img
                  src={require("../../Images/nft_card_1.jpg")}
                  alt="nft_card"
                  width="400px"
                  height="400px"
                />
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontWeight="bold">Product Name</Typography>
                  <Typography color="#818181" variant="body1">
                    Fire TV Stick
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontWeight="bold">Price</Typography>
                  <Typography color="#818181" variant="body1">
                    $20
                  </Typography>
                </Stack>
                <Stack direction="row" margin="20px 0 10px 0" spacing="20px">
                  <Typography fontWeight="bold">Email</Typography>
                  <Typography
                    variant="body2"
                    color="#8080D7"
                    sx={{ textDecoration: "underline" }}
                  >
                    daudumar@gmail.com
                  </Typography>
                </Stack>
                <Stack margin="20px 0 10px 0">
                  <Typography fontWeight="bold">Description</Typography>
                  <Typography variant="body2" color="#818181" width="400px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid margin="40px 120px 0 0">
              {/* Data Box */}
              <Typography variant="h6">Feedbacks</Typography>
              <Box style={divStyle}>
                <Stack direction="column" margin="20px 0 20px 0" spacing="10px">
                  <Typography fontWeight="bold">Hendreit</Typography>
                  <Typography variant="body2" color="#818181" width="400px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                </Stack>
                <Divider />
                <Stack direction="column" margin="20px 0 20px 0" spacing="10px">
                  <Typography fontWeight="bold">Hendreit</Typography>
                  <Typography variant="body2" color="#818181" width="400px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                </Stack>
                <Divider />
                <Stack direction="column" margin="20px 0 20px 0" spacing="10px">
                  <Typography fontWeight="bold">Hendreit</Typography>
                  <Typography variant="body2" color="#818181" width="400px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                </Stack>
                <Divider />
                <Stack direction="column" margin="20px 0 20px 0" spacing="10px">
                  <Typography fontWeight="bold">Hendreit</Typography>
                  <Typography variant="body2" color="#818181" width="400px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                </Stack>
                <Divider />

                <Stack direction="column" margin="20px 0 20px 0" spacing="10px">
                  <Typography fontWeight="bold">Hendreit</Typography>
                  <Typography variant="body2" color="#818181" width="400px">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                </Stack>
                <Divider />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerQuestionResponse;
