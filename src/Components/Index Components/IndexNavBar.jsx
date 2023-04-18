import React, { useState } from "react";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Typography,
  Divider,
  styled,
} from "@mui/material";
import IndexDrawer from "./IndexDrawer";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const navItem = {
  color: "grey",
  cursor: "pointer",
  marginRight: "20px",
  "&:hover": {
    color: "#8080D7",
    transition: "0.5s",
  },
};

const iconStyle = {
  marginRight: "16px",
  color: "grey",
};

const ImgTag = styled("img")({
  width: "32px",
  height: "32px",
  cursor: "pointer",
  marginRight: "10px",
});

const IndexNavbar = () => {
  // profile-dropdown //
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // profile-dropdown //

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* ArtySouq Logo Grid */}
          <ImgTag src={require("../../Images/as.png")} alt="nft" />;
          <Grid container>
            <Grid item>
              <Typography sx={{ color: "grey", cursor: "pointer" }}>
                ArtySouq
              </Typography>
            </Grid>
          </Grid>
          {/* Admin Navigation Grid */}
          <Grid container sx={{ justifyContent: "flex-end" }}>
            {isMatch ? (
              <IndexDrawer />
            ) : (
              <Grid container justifyContent="flex-end" alignItems="center">
                <Typography sx={navItem}>create nft's</Typography>
                <Typography sx={navItem}>marketplace</Typography>
                <Typography sx={navItem}>supplies</Typography>
                <Typography sx={navItem}>forums</Typography>
                <Typography
                  sx={navItem}
                  aria-controls="profile-menu"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Grid container>
                    profile
                    <ArrowDropDownIcon />
                  </Grid>
                </Typography>

                {/* Profile dropdown menu */}
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem sx={{ width: "180px" }}>
                    <Grid container alignItems="center">
                      <PersonIcon sx={iconStyle} />
                      Profile
                    </Grid>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{ width: "180px" }}>
                    <Grid container alignItems="center">
                      <SettingsIcon sx={iconStyle} />
                      Settings
                    </Grid>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{ width: "180px" }}>
                    <Grid container alignItems="center">
                      <PowerSettingsNewIcon sx={iconStyle} />
                      Log Out
                    </Grid>
                  </MenuItem>
                </Menu>
                <Typography sx={navItem}>wallet</Typography>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default IndexNavbar;
