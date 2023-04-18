import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Stack,
  styled,
  Button,
  TextField,
} from "@mui/material";
import BuyerNavbar from "./../../Components/Buyer Components/Buyer_Navbar";
import Footer from "./../../Components/Global Components/Footer";
import HoverRating from "../../Components/Global Components/Rating";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
  zIndex: "-1",
  position: "absolute",
};
const ImgTag = styled("img")({
  borderRadius: 50,
});

const BuyerNFT = () => {
  return (
    <div>
      <BuyerNavbar />
      <Grid
        sx={header}
        container
        alignItems="center"
        justifyContent="flex-start"
      >
        <Container maxWidth="xl">
          <Grid item>
            <Typography variant="h4" fontWeight="bold" color="#fff">
              Buy Items
            </Typography>
          </Grid>
        </Container>
      </Grid>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          paddingTop: "20px",
          marginTop: "120px",
          paddingBottom: "50px",
          borderRadius: "8px",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        <Container sx={{ paddingTop: "20px" }}>
          <Grid container justifyContent="space-between">
            {/* Image and details Grid */}
            <Grid>
              {/* Image Box */}
              <Box>
                <Box marginTop="10px" />
                <img
                  src={require("../../Images/nft_card_1.jpg")}
                  alt="nft_card"
                  width="400px"
                  height="400px"
                />
              </Box>
              {/* Data Box */}
              <Typography mt={3} variant="body1" fontWeight="bold">
                Details
              </Typography>
              <Grid container columnGap={12}>
                <Grid sx={{ marginTop: "16px" }}>
                  <Typography variant="body2" color="#818181">
                    Product Name
                  </Typography>
                  <Typography variant="body2" color="#818181" marginTop={1}>
                    Collection
                  </Typography>
                  <Typography variant="body2" color="#818181" marginTop={1}>
                    Token Standard
                  </Typography>
                  <Typography variant="body2" color="#818181" marginTop={1}>
                    Blockchain
                  </Typography>
                </Grid>
                <Grid sx={{ marginTop: "16px" }}>
                  <Typography color="#818181" variant="body2">
                    Fire TV Stick
                  </Typography>
                  <Typography color="#818181" variant="body2" marginTop={1}>
                    8508550793340827...
                  </Typography>
                  <Typography color="#818181" variant="body2" marginTop={1}>
                    ERC-1155
                  </Typography>
                  <Typography color="#818181" variant="body2" marginTop={1}>
                    Ethereum
                  </Typography>
                </Grid>
              </Grid>
              {/* Properties Label */}
              <Typography mt={3} variant="body1" fontWeight="bold">
                Properties
              </Typography>
              {/* Properties Grid */}
              <Grid container>
                <Grid container columnGap={2}>
                  <Box
                    mt={2}
                    sx={{
                      width: "160px",
                      height: "10vh",
                      border: "2px solid #D1D1D1",
                      borderRadius: "6px",
                      "&:hover": {
                        borderColor: "#8080D7",
                      },
                    }}
                  >
                    <Grid container justifyContent="center" rowGap="2px">
                      <Typography
                        mt={2}
                        variant="body2"
                        color="#818181"
                        fontWeight="bold"
                      >
                        Asset size in bytes
                      </Typography>
                      <Typography width="120px" variant="body2">
                        8654492
                      </Typography>

                      <Typography
                        variant="caption"
                        fontSize="12px"
                        width="120px"
                        color="#818181"
                      >
                        12% rarity
                      </Typography>
                    </Grid>
                  </Box>
                  <Box
                    mt={2}
                    sx={{
                      width: "160px",
                      height: "10vh",
                      border: "2px solid #D1D1D1",
                      borderRadius: "6px",
                      "&:hover": {
                        borderColor: "#8080D7",
                      },
                    }}
                  >
                    <Grid container justifyContent="center" rowGap="2px">
                      <Typography
                        mt={2}
                        variant="body2"
                        color="#818181"
                        fontWeight="bold"
                      >
                        Asset size in bytes
                      </Typography>
                      <Typography width="120px" variant="body2">
                        8654492
                      </Typography>

                      <Typography
                        variant="caption"
                        fontSize="12px"
                        width="120px"
                        color="#818181"
                      >
                        12% rarity
                      </Typography>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* Product Price Grid */}
            <Grid>
              <Grid>
                <Typography variant="h4">3d asthetics with shapes</Typography>
                <Typography variant="caption" color="#818181">
                  Minted on Oct 29, 2021
                </Typography>
                {/* Creator Box */}
                <Box
                  marginY={3}
                  sx={{
                    width: "320px",
                    height: "10vh",
                    border: "2px solid #D1D1D1",
                    borderRadius: "6px",
                    "&:hover": {
                      borderColor: "#8080D7",
                    },
                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-around"
                    mt={2}
                  >
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="#818181"
                    >
                      Creator
                    </Typography>
                    <ImgTag
                      src={require("../../Images/images.jpeg")}
                      alt="avatar"
                      width="56"
                      height="56"
                    />
                    <Typography fontWeight="bold">@daud_umar</Typography>
                  </Grid>
                </Box>
                {/* Price and detail box */}
                <Box>
                  <Typography width="600px" variant="body2" color="#818181">
                    Hendrerit interdum sit massa lobortis. Habitant faucibus
                    lorem dui mauris. Pellentesque nunc, tortor quam consequat
                    odio. Sed faucibus id rhoncus, scelerisque tristique
                    ultricies nam.
                  </Typography>
                  <Typography
                    marginTop={4}
                    variant="body2"
                    fontWeight="bold"
                    color="#818181"
                  >
                    Current Price
                  </Typography>
                  <Typography variant="h4">2.80 ETH</Typography>
                  <Typography variant="body2" color="#818181">
                    795.98 $
                  </Typography>
                </Box>
                {/* Button Box */}
                <Box>
                  <Grid container columnGap={3}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#8080D7",
                        "&:hover": { backgroundColor: "#8080D7" },
                        margin: "20px 0 0 0",
                      }}
                    >
                      Buy now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#8080D7",
                        margin: "20px 0 0 0",
                      }}
                    >
                      Make an offer
                    </Button>
                  </Grid>
                </Box>
                {/* Rating Box */}
                <Box marginY={4}>
                  <Grid container>
                    <Typography fontWeight="bold" marginRight="20px">
                      Rating
                    </Typography>
                    <HoverRating />
                  </Grid>
                </Box>
                {/* Question Box */}
                <Box>
                  <Typography fontWeight="bold" marginRight="20px">
                    Ask any questions
                  </Typography>
                  <Grid
                    container
                    mt={3}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TextField
                      sx={{ width: "460px" }}
                      size="small"
                      id="outlined-basic"
                      label="e.g.questions..."
                      variant="outlined"
                    />
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#8080D7",
                        "&:hover": { backgroundColor: "#8080D7" },
                      }}
                    >
                      Ask
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default BuyerNFT;
