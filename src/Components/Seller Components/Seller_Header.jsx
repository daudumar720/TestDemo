import React from "react";
import { Container, Box, Grid, styled, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const SellerHeader = () => {
  const ImgTag = styled("img")({
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 20,
  });
  const SpanBoldTxt = styled("span")({
    fontWeight: "bold",
    fontSize: 15,
  });
  return (
    <Box
      sx={{
        backgroundColor: "#8080D7",
        left: 0,
        right: 0,
        color: "white",
        height: "280px",
        zIndex: "-1",
        position: "absolute",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ paddingTop: 3, paddingBottom: 5, marginBottom: 3 }}
      >
        {/* Main Header Grid */}
        <Grid container>
          {/* Right Items Grid */}
          <Grid container lg={6} md={6} sm={6} alignItems="center">
            <Grid item>
              <ImgTag
                src={require("../../Images/images.jpeg")}
                alt="avatar"
                width="100"
                height="100"
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">@john_berry</Typography>
              <Typography variant="subtitle2">Joined Dec,2022</Typography>
            </Grid>
          </Grid>

          {/* Left Items Grid */}
          <Grid
            container
            lg={6}
            md={6}
            sm={6}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box sx={{ marginRight: 5 }}>
              <Grid container spacing={0.5}>
                <Grid item>
                  <Typography variant="subtitle2">
                    <SpanBoldTxt>766</SpanBoldTxt> followers
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">
                    <SpanBoldTxt>2K</SpanBoldTxt> followings
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Typography variant="subtitle2">#cdsdahkkkl1237</Typography>
                  <ContentCopyIcon fontSize="small" />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SellerHeader;
