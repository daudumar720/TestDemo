import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";
const pages = [
  "Sellers",
  "Payments",
  "Disputes",
  "Forums",
  "Profile",
  "Wallet",
  "Logout",
];
const CommunityDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        variant="persistent"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemIcon>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <ArrowBackIcon />
            </IconButton>
          </ListItemIcon>
          {pages.map((page, index) => (
            <ListItemButton>
              <ListItemIcon>
                <ListItemText key={index}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default CommunityDrawer;
