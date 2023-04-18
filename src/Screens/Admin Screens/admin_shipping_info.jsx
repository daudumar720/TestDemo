import React from "react";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import AdminHeader from "../../Components/Admin Components/Admin_Header";
import AdminNavbar from "../../Components/Admin Components/Admin_Navbar";
import AdminSideNav from "../../Components/Admin Components/Admin_SideNav";
import Footer from "../../Components/Global Components/Footer";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AdminShippingTable from "../../Components/Admin Components/Admin_Shipping_Table";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const AdminShippingInfo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AdminNavbar />
      <AdminHeader />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          marginTop: "160px",
          paddingTop: "20px",
          paddingBottom: "50px",
          borderRadius: "8px",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        {/* Side Nav Component */}
        <AdminSideNav />
        {/* Admin Shipping Information Content Container */}
        <Container sx={{ marginTop: "20px" }}>
          <Grid container justifyContent="space-between">
            {/* Heading Grid */}
            <Grid item>
              <Typography variant="h4" fontWeight="bold" marginBottom={3}>
                Shipping Information
              </Typography>
            </Grid>
            {/* Search Bar and Button Grid */}
            <Grid item>
              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  backgroundColor: "#8080D7",
                  "&:hover": {
                    backgroundColor: "#8080D7",
                  },
                }}
              >
                Add
              </Button>
              <TextField
                size="small"
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{ marginLeft: "30px", width: 180 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {/* Add Button Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* Modal Content */}
            <Box sx={style}>
              <Grid container justifyContent="space-between">
                <Grid>
                  <Typography variant="h5" fontWeight="bold" marginBottom={4}>
                    Add Shipping Package
                  </Typography>
                </Grid>
                <Grid>
                  <Button sx={{ color: "black" }}>
                    <CloseIcon onClick={handleClose} />
                  </Button>
                </Grid>
              </Grid>

              {/* Input Text Grids */}
              <Grid container columnGap={5} marginBottom="20px">
                <TextField
                  variant="outlined"
                  sx={{ width: 320 }}
                  label="From City"
                  size="small"
                ></TextField>
                <TextField
                  variant="outlined"
                  sx={{ width: 320 }}
                  label="Destination"
                  size="small"
                ></TextField>
              </Grid>
              <Grid container columnGap={5} marginBottom="20px">
                <TextField
                  variant="outlined"
                  sx={{ width: 320 }}
                  label="Estimated Delivery Time"
                  size="small"
                ></TextField>
                <TextField
                  variant="outlined"
                  sx={{ width: 320 }}
                  label="Amount"
                  size="small"
                ></TextField>
              </Grid>
              <Grid container columnGap={5} marginBottom="20px">
                <TextField
                  variant="outlined"
                  sx={{ width: 320 }}
                  label="Weight"
                  size="small"
                ></TextField>
                <TextField
                  variant="outlined"
                  sx={{ width: 320 }}
                  label="Dimensions"
                  size="small"
                ></TextField>
              </Grid>
              <Grid container columnGap={5} marginBottom="50px">
                <TextField
                  variant="outlined"
                  sx={{ width: 320 }}
                  label="Company"
                  size="small"
                ></TextField>
                {/* CheckBox */}
                <FormControlLabel
                  control={
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: "#8080D7",
                        "&.Mui-checked": {
                          color: "#8080D7",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography marginTop={1} color="#818181">
                      Fragile
                    </Typography>
                  }
                />
              </Grid>
              {/* Add Button */}
              <Grid container justifyContent="center">
                <Button
                  variant="contained"
                  sx={{
                    width: "300px",
                    backgroundColor: "#8080D7",
                    "&:hover": { backgroundColor: "#8080D7" },
                  }}
                >
                  Add
                </Button>
              </Grid>
            </Box>
          </Modal>
          {/* Shipping Table */}
          <Box>
            <Typography fontWeight={500} fontSize="18px" margin="5px 0 10px 0">
              Shipping Information Table
            </Typography>
            <AdminShippingTable />
          </Box>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default AdminShippingInfo;
