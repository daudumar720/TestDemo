import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";

const IndexDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
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
          {/* Back Button */}
          <ListItemIcon>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <ArrowBackIcon />
            </IconButton>
          </ListItemIcon>

          {/* Drawer Items */}
          <Grid>
            <ListItemButton sx={{ height: "64px" }}>
              <Grid container justifyContent="center">
                <Typography sx={{ fontSize: "20px", color: "grey" }}>
                  nft's
                </Typography>
              </Grid>
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ height: "64px" }}>
              <Grid container justifyContent="center">
                <Typography sx={{ fontSize: "20px", color: "grey" }}>
                  artifacts
                </Typography>
              </Grid>
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ height: "64px" }}>
              <Grid container justifyContent="center">
                <Typography sx={{ fontSize: "20px", color: "grey" }}>
                  supplies
                </Typography>
              </Grid>
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ height: "64px" }}>
              <Grid container justifyContent="center">
                <Typography sx={{ fontSize: "20px", color: "grey" }}>
                  forums
                </Typography>
              </Grid>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={handleClick} sx={{ height: "64px" }}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                columnGap={1}
              >
                <Typography sx={{ fontSize: "20px", color: "grey" }}>
                  profile
                </Typography>
                {open ? (
                  <ExpandLess sx={{ color: "grey" }} />
                ) : (
                  <ExpandMore sx={{ color: "grey" }} />
                )}
              </Grid>
            </ListItemButton>
            <Divider />

            {/* Nested Menu */}
            <Collapse in={open} timeout="auto" unmountOnExit>
              <ListItemButton>
                <Grid container justifyContent="center" alignItems="center">
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <Typography sx={{ fontSize: "18px", color: "grey" }}>
                    profile
                  </Typography>
                </Grid>
              </ListItemButton>

              <ListItemButton>
                <Grid container justifyContent="center" alignItems="center">
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <Typography sx={{ fontSize: "18px", color: "grey" }}>
                    setting
                  </Typography>
                </Grid>
              </ListItemButton>

              <ListItemButton>
                <Grid container justifyContent="center" alignItems="center">
                  <ListItemIcon>
                    <PowerSettingsNewIcon />
                  </ListItemIcon>
                  <Typography sx={{ fontSize: "18px", color: "grey" }}>
                    logout
                  </Typography>
                </Grid>
              </ListItemButton>
            </Collapse>

            <ListItemButton sx={{ height: "64px" }}>
              <Grid container justifyContent="center">
                <Typography sx={{ fontSize: "20px", color: "grey" }}>
                  wallet
                </Typography>
              </Grid>
            </ListItemButton>
          </Grid>
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

export default IndexDrawer;
