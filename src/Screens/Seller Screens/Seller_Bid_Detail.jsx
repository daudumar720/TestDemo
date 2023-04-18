import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  styled,
  Divider,
} from "@mui/material";

const divStyle = {
  overflowY: "scroll",
  width: "100%",
  height: "360px",
};

const SellerBidDetail = () => {
  const MySpan = styled("span")({
    color: "#8080D7",
    fontWeight: "bold",
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
        <Container sx={{ paddingTop: "20px" }}>
          <Grid container justifyContent="space-between">
            <Grid>
              {/* Image Box */}
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Bid Detail
                </Typography>
                <Box marginTop="10px" />
                <img
                  src={require("../../Images/nft_card_1.jpg")}
                  alt="nft_card"
                  width="400px"
                  height="400px"
                />
                {/* Item Detail Grid */}
                <Grid container columnGap={12}>
                  <Grid sx={{ marginTop: "32px" }}>
                    <Typography variant="body1" fontWeight="bold">
                      Product Name
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      Collection
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      Token Standard
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      Blockchain
                    </Typography>
                  </Grid>
                  <Grid sx={{ marginTop: "32px" }}>
                    <Typography color="#818181" variant="body1">
                      Fire TV Stick
                    </Typography>
                    <Typography color="#818181" variant="body1">
                      8508550793340827...
                    </Typography>
                    <Typography color="#818181" variant="body1">
                      ERC-1155
                    </Typography>
                    <Typography color="#818181" variant="body1">
                      Ethereum
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid margin="40px 120px 0 0">
              {/* Data Box */}
              <Typography variant="h6">Bid History</Typography>
              {/* Bid History Box Scrollable */}
              <Box style={divStyle}>
                {/* Bid History Box Singlr Content Box  */}
                <Box>
                  <Grid
                    container
                    justifyContent="space-between"
                    marginBottom="10px"
                    marginTop="10px"
                  >
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        <MySpan>@shayan_ahmed</MySpan> placed a bid
                      </Typography>
                      <Typography variant="body2" color="#818181">
                        2 hours ago
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h6">2.80 ETH</Typography>
                      <Typography variant="body2" color="#818181">
                        ~795.98 $
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="space-between"
                    marginBottom="10px"
                    marginTop="10px"
                  >
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        <MySpan>@shayan_ahmed</MySpan> placed a bid
                      </Typography>
                      <Typography variant="body2" color="#818181">
                        2 hours ago
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h6">2.80 ETH</Typography>
                      <Typography variant="body2" color="#818181">
                        ~795.98 $
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="space-between"
                    marginBottom="10px"
                    marginTop="10px"
                  >
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        <MySpan>@shayan_ahmed</MySpan> placed a bid
                      </Typography>
                      <Typography variant="body2" color="#818181">
                        2 hours ago
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h6">2.80 ETH</Typography>
                      <Typography variant="body2" color="#818181">
                        ~795.98 $
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="space-between"
                    marginBottom="10px"
                    marginTop="10px"
                  >
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        <MySpan>@shayan_ahmed</MySpan> placed a bid
                      </Typography>
                      <Typography variant="body2" color="#818181">
                        2 hours ago
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h6">2.80 ETH</Typography>
                      <Typography variant="body2" color="#818181">
                        ~795.98 $
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="space-between"
                    marginBottom="10px"
                    marginTop="10px"
                  >
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        <MySpan>@shayan_ahmed</MySpan> placed a bid
                      </Typography>
                      <Typography variant="body2" color="#818181">
                        2 hours ago
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h6">2.80 ETH</Typography>
                      <Typography variant="body2" color="#818181">
                        ~795.98 $
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="space-between"
                    marginBottom="10px"
                    marginTop="10px"
                  >
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        <MySpan>@shayan_ahmed</MySpan> placed a bid
                      </Typography>
                      <Typography variant="body2" color="#818181">
                        2 hours ago
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h6">2.80 ETH</Typography>
                      <Typography variant="body2" color="#818181">
                        ~795.98 $
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Box>
              </Box>
              <Grid container columnGap={12}>
                <Grid sx={{ marginTop: "32px" }}>
                  <Typography variant="body1" fontWeight="bold">
                    Closing Time
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    Base Price
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    Highest Bid
                  </Typography>
                </Grid>
                <Grid sx={{ marginTop: "32px" }}>
                  <Typography color="#818181" variant="body1">
                    8 August 2022 11:50 AM
                  </Typography>
                  <Typography color="#818181" variant="body1">
                    5.0 ETH
                  </Typography>
                  <Typography color="#818181" variant="body1">
                    10.3 ETH
                  </Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  width: "160px",
                  backgroundColor: "#8080D7",
                  "&:hover": { backgroundColor: "#8080D7" },
                  margin: "20px 0 0 0",
                }}
              >
                Sell
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerBidDetail;
