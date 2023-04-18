import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import PermMediaIcon from "@mui/icons-material/PermMedia";

const CommunitySideNav = () => {
  return (
    <Box>
      <Box flex={1}>
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#posts">
              <ListItemIcon>
                <WysiwygIcon />
              </ListItemIcon>
              <ListItemText primary="Posts"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#create-post">
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Create Post"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#my-posts">
              <ListItemIcon>
                <PermMediaIcon />
              </ListItemIcon>
              <ListItemText primary="My Posts"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#followed-posts">
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Followed Posts"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#questions">
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="Questions"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default CommunitySideNav;
