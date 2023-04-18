import React from "react";
import { Container, Box } from "@mui/material";
import CommunityHeader from "../../Components/Community Forum Components/Community_Header";
import CommunityNavbar from "../../Components/Community Forum Components/Community_Navbar";
import Footer from "../../Components/Global Components/Footer";
import CommunitySideNav from "../../Components/Community Forum Components/Community_SideNav";
import CommunityMyPostCard from "../../Components/Community Forum Components/Community_My_Post_Card";

const CommunityMyPost = () => {
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
            <h1>My Posts</h1>
            <CommunityMyPostCard />
            <CommunityMyPostCard />
          </Box>
        </Container>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CommunityMyPost;
