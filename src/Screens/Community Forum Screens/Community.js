import React from "react";
import CommunityPostPage from "./Community_Post_Page";
import CommunityCreatePost from "./Community_Create_Post";
import CommunityMyPost from "./Community_My_Post";
import { Route, Routes } from "react-router-dom";
const Community = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/post" element={<CommunityPostPage />} />
        <Route path="/create-post" element={<CommunityCreatePost />} />
        <Route path="/my-post" element={<CommunityMyPost />} />
      </Routes>
    </React.Fragment>
  );
};

export default Community;
