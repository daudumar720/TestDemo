import React from "react";
import { Box } from "@mui/material";

const CommunityHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#8080D7",
        left: 0,
        right: 0,
        height: "200px",
        zIndex: "-1",
        position: "absolute",
      }}
    ></Box>
  );
};

export default CommunityHeader;
