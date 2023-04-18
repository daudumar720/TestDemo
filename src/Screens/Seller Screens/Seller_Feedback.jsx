import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import HoverRating from "./../../Components/Global Components/Rating";
import {
  Container,
  Typography,
  Grid,
  styled,
  Card,
  Divider,
} from "@mui/material";

const style = {
  bgcolor: "background.paper",
  boxShadow: 12,
  p: 4,
  borderRadius: 2,
  marginBottom: "20px",
};

const SellerFeedback = () => {
  const ImgTag = styled("img")({
    marginRight: "50PX",
    width: "250px",
    height: "150px",
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
          p: 4,
        }}
      >
        {/* Side Nav Component */}
        <SellerSideNav />
        <Container>
          <Typography variant="h4" fontWeight="bold" marginBottom={3}>
            Feedback
          </Typography>
          <Card sx={style}>
            <Grid container>
              <Grid item>
                <ImgTag src={require("../../Images/new.jpeg")} alt="avatar" />
              </Grid>
              <Grid item>
                <Typography
                  fontSize="24px"
                  fontWeight="bold"
                  marginTop="5px"
                  marginBottom="5px"
                >
                  Product Name
                </Typography>
                <Grid container alignItems="center">
                  <Grid>
                    <Typography
                      fontWeight="bold"
                      fontSize="14px"
                      variant="body2"
                      sx={{ marginRight: "45px" }}
                    >
                      Feedback
                    </Typography>
                    <Typography fontSize="12px" color="#818181" width="600px">
                      Hendrerit interdum sit massa lobortis. Hendrerit interdum
                      sit massa lobortis.Hendrerit interdum sit massa lobortis.
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  sx={{ marginTop: "10px" }}
                  alignItems="center"
                  // justifyContent="space-between"
                >
                  <Typography
                    fontWeight="bold"
                    variant="body2"
                    marginRight="20px"
                  >
                    Rating
                  </Typography>
                  <HoverRating />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerFeedback;
