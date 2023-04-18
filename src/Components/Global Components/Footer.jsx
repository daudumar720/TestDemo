import React from "react";
import {
  Grid,
  Box,
  Typography,
  styled,
  InputBase,
  Button,
} from "@mui/material";

const Footer = () => {
  const Search = styled("div")({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "8px 0 0 8px",
    margin: "10px 0 10px 0",
    width: 200,
  });
  return (
    <Box mt={5}>
      <Grid
        container
        sx={{ backgroundColor: "#000740", opacity: "83%" }}
        justifyContent="space-around"
      >
        {/* Search Bar Grid */}
        <Grid item sx={{ margin: 5 }}>
          <Typography color="white" variant="subtitle2">
            Stay informed
          </Typography>
          <Grid container alignItems="center">
            <Search>
              <InputBase placeholder="Your Email" />
            </Search>
            <Button
              variant="contained"
              sx={{
                height: 32,
                backgroundColor: "#8080D7",
                borderRadius: "0 8px 8px 0",
                "&:hover": {
                  backgroundColor: "#8080D7",
                },
              }}
            >
              Subscribe
            </Button>
          </Grid>
          <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
            *Subscribe to our newsletter to receive early discount offers,
            <br />
            updates and new products info.
          </Typography>
        </Grid>

        {/* Content Grid */}
        <Grid container lg={6}>
          {/* Company Grid */}
          <Grid item sx={{ margin: 5 }}>
            <Typography color="white" variant="subtitle2" mb={3}>
              Company
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              About us
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              How it works
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Create an NFT with us
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Support
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Blog
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              My Account
            </Typography>
          </Grid>

          {/* Marketplace Grid */}
          <Grid item sx={{ margin: 5 }}>
            <Typography color="white" variant="subtitle2" mb={3}>
              Marketplace
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              All NFTs
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              New Art
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Sports
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Photograp
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Music
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Utilities
            </Typography>
          </Grid>

          {/* Help Grid */}
          <Grid item sx={{ margin: 5 }}>
            <Typography color="white" variant="subtitle2" mb={3}>
              Help
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Terms and Conditions
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Privacy Policy
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Request Returns
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Track orders, disputes & returns
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              Open Disputes
            </Typography>
            <Typography color="#D1D1D1" variant="body2" sx={{ fontSize: 10 }}>
              FAQs
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Lower Footer */}
      <Box sx={{ backgroundColor: "#000740" }} color="#818181" variant="body2">
        <Typography sx={{ fontSize: 10, padding: 2, marginLeft: 16 }}>
          © All rights reserved. Made by Createx Studio
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
