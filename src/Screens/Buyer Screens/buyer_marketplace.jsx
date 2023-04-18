import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  Autocomplete,
  InputAdornment,
  TextField,
  Divider,
  Pagination,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BuyerNavbar from "./../../Components/Buyer Components/Buyer_Navbar";
import NFTCard from "../../Components/Global Components/NFT_Card";
import Footer from "./../../Components/Global Components/Footer";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
  zIndex: "-1",
  position: "absolute",
};

const BuyerMarketplace = () => {
  return (
    <div>
      <BuyerNavbar />
      <Grid sx={header} container alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h4" fontWeight="bold" color="#fff">
            Explore NFT's/ Supplies/ Artifacts
          </Typography>
        </Grid>
      </Grid>
      {/* Search bar Container */}
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          paddingTop: "20px",
          marginTop: "120px",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        <Grid container justifyContent="space-between">
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={filter}
            sx={{
              width: "160px",
            }}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  sx: { height: "48px", borderRadius: "8px" },
                }}
                {...params}
                label="Filter"
              />
            )}
          />
          <TextField
            size="small"
            id="outlined-basic"
            placeholder="Search collection, title or user..."
            variant="outlined"
            sx={{
              width: "1080px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={sortBy}
            sx={{
              width: "160px",
            }}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  sx: { height: "48px", borderRadius: "8px" },
                }}
                {...params}
                label="Sort By"
              />
            )}
          />
        </Grid>
      </Container>
      {/* Main Content Container */}
      <Container maxWidth="xl" sx={{ marginY: "48px" }}>
        <Grid container justifyContent="space-between" marginY={5}>
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </Grid>
        <Grid container justifyContent="space-between" marginY={5}>
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </Grid>
        <Grid container justifyContent="space-between" marginY={5}>
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </Grid>

        <Divider />
        <Grid container justifyContent="center" marginY={3}>
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default BuyerMarketplace;
const filter = [{ label: "Price" }, { label: "New" }, { label: "Old" }];
const sortBy = [{ label: "New" }, { label: "Old" }];
