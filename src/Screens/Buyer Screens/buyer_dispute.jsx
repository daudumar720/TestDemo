import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  Autocomplete,
  TextField,
} from "@mui/material";
import React from "react";
import BuyerNavbar from "./../../Components/Buyer Components/Buyer_Navbar";
import Footer from "./../../Components/Global Components/Footer";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
};

const BuyerDispute = () => {
  return (
    <div>
      <BuyerNavbar />
      <Grid sx={header} container alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h4" fontWeight="bold" color="#fff">
            Disputes
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Box marginY={8}>
          <Box>
            <Typography variant="h6">Upload file</Typography>
            <Typography variant="caption" color="#818181">
              Upload a clear image of product and Original receipt
            </Typography>
          </Box>
          <Typography variant="h6" marginY={2}>
            Details
          </Typography>
          <Box marginY={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Order number
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              label="Order number"
              variant="outlined"
              sx={{
                width: { xs: "70%", md: "50%", lg: "30%" },
                marginTop: "6px",
              }}
            />
          </Box>
          <Box marginY={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Email
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              label="email"
              variant="outlined"
              sx={{
                width: { xs: "70%", md: "50%", lg: "30%" },
                marginTop: "6px",
              }}
            />
          </Box>
          <Box marginY={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Reason
            </Typography>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={reasons}
              sx={{
                width: { xs: "30%", md: "20%", lg: "10%" },
                marginTop: "6px",
              }}
              renderInput={(params) => <TextField {...params} label="status" />}
            />
          </Box>
          <Box marginY={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Description
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              label="Enter a short description of your items"
              variant="outlined"
              sx={{ width: { xs: "70%", lg: "50%" }, marginTop: "6px" }}
              InputProps={{ sx: { height: "180px" } }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8080D7",
              "&:hover": { backgroundColor: "#8080D7" },
              margin: "20px 0 0 0",
            }}
          >
            Submit Request
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default BuyerDispute;
const reasons = [{ label: "Old" }, { label: "Broken" }, { label: "Copied" }];
