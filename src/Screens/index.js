import React from "react";
import {
  Box,
  Typography,
  Stack,
  styled,
  Button,
  Container,
  Grid,
  SvgIcon,
} from "@mui/material";
import IndexNavBar from "../Components/Index Components/IndexNavBar";
import IndexHeader from "../Components/Index Components/IndexHeader";
import NFTCard from "../Components/Global Components/NFT_Card";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "../Components/Global Components/Footer";
import { ReactComponent as WalletLogo } from "../Images/wallet.svg";
import { ReactComponent as ShoppingLogo } from "../Images/shopping-cart.svg";
import { ReactComponent as AddLogo } from "../Images/add.svg";
import { ReactComponent as ImageLogo } from "../Images/image.svg";

const ImgTag = styled("img")({});

const Index = () => {
  return (
    <div>
      <IndexNavBar />
      <IndexHeader />
      {/* Main Content */}
      <Box>
        {/* Recent Drops */}
        <Box marginY="100px">
          <Container maxWidth="xl">
            <Grid container marginBottom="20px" justifyContent="space-between">
              <Typography variant="h4" fontWeight="bold">
                Recent Drops
              </Typography>
              <Button size="large" variant="outlined" color="secondary">
                <Typography marginRight="10px">Explore More</Typography>
                <ArrowForwardIosIcon />
              </Button>
            </Grid>
            <Stack direction="row" justifyContent="space-between">
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
            </Stack>
          </Container>
        </Box>
        {/* Trending in all Categories */}
        <Box sx={{ backgroundColor: "#f6f9fc", marginY: "50px" }}>
          <Container maxWidth="xl" sx={{ padding: "100px" }}>
            <Typography marginBottom="20px" variant="h4" fontWeight="bold">
              Trending in all categories
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
            </Stack>
            <Grid container justifyContent="center" marginTop="50px">
              <Button size="large" variant="outlined" color="secondary">
                <Typography marginRight="10px">Browse Marketplace</Typography>
              </Button>
            </Grid>
          </Container>
        </Box>

        {/* Nft Journey */}
        <Box sx={{ marginY: "100px" }}>
          <Container maxWidth="xl">
            <Typography marginBottom="20px" variant="h4" fontWeight="bold">
              Begin your NFT journey with us!
            </Typography>
            <Grid container justifyContent="space-between" marginY="50px">
              <Box width="280px">
                <WalletLogo />
                <Typography
                  fontWeight="bold"
                  variant="h6"
                  color="grey"
                  marginY="10px"
                >
                  Set up your wallet
                </Typography>
                <Typography variant="body2" color="#818181">
                  Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
                  blandit penatibus blandit. Amet mattis blandit urna volutpat.
                </Typography>
              </Box>
              <Box width="280px">
                <ImageLogo />
                <Typography
                  fontWeight="bold"
                  variant="h6"
                  color="grey"
                  marginY="10px"
                >
                  Create your collection
                </Typography>
                <Typography variant="body2" color="#818181">
                  Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
                  blandit penatibus blandit. Amet mattis blandit urna volutpat.
                </Typography>
              </Box>
              <Box width="280px">
                <AddLogo />
                <Typography
                  fontWeight="bold"
                  variant="h6"
                  color="grey"
                  marginY="10px"
                >
                  Add your NFTs
                </Typography>
                <Typography variant="body2" color="#818181">
                  Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
                  blandit penatibus blandit. Amet mattis blandit urna volutpat.
                </Typography>
              </Box>
              <Box width="280px">
                <ShoppingLogo />
                <Typography
                  fontWeight="bold"
                  variant="h6"
                  color="grey"
                  marginY="10px"
                >
                  List them for sale
                </Typography>
                <Typography variant="body2" color="#818181">
                  Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
                  blandit penatibus blandit. Amet mattis blandit urna volutpat.
                </Typography>
              </Box>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Index;
