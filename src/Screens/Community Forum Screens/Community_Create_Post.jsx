import React from "react";
import {
  Container,
  TextField,
  Box,
  Typography,
  Stack,
  Button,
  Grid,
} from "@mui/material";
import CommunityHeader from "../../Components/Community Forum Components/Community_Header";
import CommunityNavbar from "../../Components/Community Forum Components/Community_Navbar";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Footer from "../../Components/Global Components/Footer";
import CommunitySideNav from "../../Components/Community Forum Components/Community_SideNav";

const CommunityCreatePost = () => {
  return (
    <div>
      {/* Community Navbar */}
      <CommunityNavbar />

      {/* Community Header */}
      <CommunityHeader />

      {/* Community Page main Container */}
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          marginTop: "50px",
          borderRadius: "8px",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        {/* Community Side Nav */}
        <CommunitySideNav />

        {/* Main Content Container */}
        <Container>
          {/* Main Heading Box */}
          <Box marginTop="20px">
            {/* Heading Post */}
            <h1>Create Post</h1>
            <Typography fontSize="14px" color="#818181">
              Please enter your post details.
            </Typography>
            <Stack direction="row" spacing={5} margin="20px 0 20px 0">
              <TextField
                size="small"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                sx={{ width: "360px" }}
              />
              <TextField
                size="small"
                id="outlined-basic"
                label="# tags"
                variant="outlined"
                sx={{ width: "360px" }}
              />
            </Stack>
          </Box>
          <Box marginBottom="20px">
            <Typography variant="h6" fontWeight="bold">
              Upload Files
            </Typography>
            <Typography fontSize="14px" color="#818181">
              Please enter your post details.
            </Typography>
            <Box
              sx={{
                height: "180px",
                width: "1000px",
                border: 1,
                borderColor: "#D1D1D1",
                borderStyle: "dashed ",
                borderRadius: "8px",
              }}
            >
              <Grid container justifyContent="center" marginTop="60px">
                <Grid>
                  <CloudUploadOutlinedIcon
                    sx={{
                      color: "#818181",
                      width: "32px",
                      height: "32px",
                      marginLeft: "70px",
                    }}
                  />
                  <Typography
                    fontSize="13px"
                    color="#818181"
                    marginBottom="6px"
                  >
                    Drag and drop here to download
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#8080D7",
                      "&:hover": { color: "#8080D7" },
                      marginLeft: "24px",
                    }}
                  >
                    Or select file
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box marginBottom="20px">
            <Typography variant="h6" fontWeight="bold">
              Description
            </Typography>
            <Box
              sx={{
                height: "100px",
                width: "1000px",
                border: 1,
                borderColor: "#D1D1D1",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <Typography fontSize="14px" color="#818181" padding="10px">
                Enter short description...
              </Typography>
            </Box>
            <Grid container justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8080D7",
                  width: "200px",
                  "&:hover": { backgroundColor: "#8080D7" },
                  marginRight: "80px",
                }}
              >
                Post
              </Button>
            </Grid>
          </Box>
        </Container>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CommunityCreatePost;
