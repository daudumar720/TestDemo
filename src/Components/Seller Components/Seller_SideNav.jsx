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
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ForumIcon from "@mui/icons-material/Forum";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import InventoryIcon from "@mui/icons-material/Inventory";

const SellerSideNav = () => {
  return (
    <Box>
      <Box flex={1}>
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#inventory">
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Inventory"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#bids">
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="Bids"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#orders">
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Orders"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#questions">
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="Questions"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#feedback">
              <ListItemIcon>
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText primary="Feedback"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#payment">
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Payment"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#return-request">
              <ListItemIcon>
                <KeyboardReturnIcon />
              </ListItemIcon>
              <ListItemText primary="Return Request"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#dispute">
              <ListItemIcon>
                <CommentsDisabledIcon />
              </ListItemIcon>
              <ListItemText primary="Disputes"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile-setting">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Profile Setting"></ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#sign-out">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SellerSideNav;
