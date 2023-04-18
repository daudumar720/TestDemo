import React from "react";
import { Container, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CommunityHeader from "../../Components/Community Forum Components/Community_Header";
import CommunityNavbar from "../../Components/Community Forum Components/Community_Navbar";
import CommunitySideNav from "../../Components/Community Forum Components/Community_SideNav";
import CommunityPost from "../../Components/Community Forum Components/Community_Post";
import Footer from "../../Components/Global Components/Footer";

const CommunityPostPage = () => {
  return (
    <div>
      {/* Community Navbar */}
      <CommunityNavbar />

      {/* Community Header */}
      <CommunityHeader />

      {/* Community Page Main Container */}
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
          {/* Main Heading and Search Bar Box */}
          <Box>
            {/* Search Bar */}
            <TextField
              size="small"
              id="outlined-basic"
              label="Search collection, title or user..."
              variant="outlined"
              sx={{ width: "1150px", margin: "20px 0 20px 0" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* Heading Post */}
            <h1>Posts</h1>
          </Box>
          <CommunityPost />
          <CommunityPost />
        </Container>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CommunityPostPage;
