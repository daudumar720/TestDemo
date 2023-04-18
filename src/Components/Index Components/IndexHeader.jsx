import React from "react";
import {
  Box,
  Typography,
  Stack,
  styled,
  Button,
  Container,
  Grid,
} from "@mui/material";

const ImgTag = styled("img")({
  borderRadius: "6px",
});
const IndexHeader = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#8080D7",
          width: "auto",
        }}
      >
        {/* Header Container */}
        <Container maxWidth="xl">
          <Grid container justifyContent="space-between">
            {/* Heading Content */}
            <Box marginTop="200px">
              <Typography
                padding="20px 0 20px 0"
                variant="h3"
                fontWeight="bold"
                color="#fff"
                width="600px"
              >
                Discover Rare Digital Art and Collect NFTs
              </Typography>
              <Typography color="#000740" width="450px" margin="20px 0 20px 0">
                The world's first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs).
              </Typography>
              <Stack direction="row" spacing={3} padding="20px 0 20px 0">
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    width: "200px",
                    backgroundColor: "#2A255E",
                    "&:hover": { backgroundColor: "#2A255E" },
                  }}
                >
                  Buy Artifacts
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    width: "200px",
                    color: "black",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "black", color: "white" },
                  }}
                >
                  Buy NFTs
                </Button>
              </Stack>
            </Box>
            {/* Image Content */}
            <Box padding="50px 0 50px 0">
              <ImgTag src={require("../../Images/nft_card_1.jpg")} alt="nft" />;
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default IndexHeader;
