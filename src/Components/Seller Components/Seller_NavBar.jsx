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
} from "@mui/material";
import SellerDrawer from "./Seller_Drawer";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SellerNavBar = () => {
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
              <SellerDrawer />
            ) : (
              <Grid container justifyContent="flex-end" alignItems="center">
                <Typography
                  sx={{ color: "grey", cursor: "pointer", marginRight: "20px" }}
                >
                  questions
                </Typography>
                <Typography
                  sx={{ color: "grey", cursor: "pointer", marginRight: "20px" }}
                >
                  inventory
                </Typography>
                <Typography
                  sx={{ color: "grey", cursor: "pointer", marginRight: "20px" }}
                >
                  orders
                </Typography>
                <Typography
                  sx={{ color: "grey", cursor: "pointer", marginRight: "20px" }}
                >
                  forums
                </Typography>
                <Typography
                  sx={{ color: "grey", cursor: "pointer", marginRight: "20px" }}
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
                      <PersonIcon sx={{ marginRight: "16px", color: "grey" }} />
                      Profile
                    </Grid>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{ width: "180px" }}>
                    <Grid container alignItems="center">
                      <SettingsIcon
                        sx={{ marginRight: "16px", color: "grey" }}
                      />
                      Settings
                    </Grid>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{ width: "180px" }}>
                    <Grid container alignItems="center">
                      <PowerSettingsNewIcon
                        sx={{ marginRight: "16px", color: "grey" }}
                      />
                      Log Out
                    </Grid>
                  </MenuItem>
                </Menu>
                <Typography
                  sx={{
                    color: "grey",
                    cursor: "pointer",
                  }}
                >
                  wallet
                </Typography>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SellerNavBar;
