import React from "react";
import SellerNavBar from "../../Components/Seller Components/Seller_NavBar";
import SellerHeader from "../../Components/Seller Components/Seller_Header";
import SellerSideNav from "../../Components/Seller Components/Seller_SideNav";
import Footer from "../../Components/Global Components/Footer";
import {
  Button,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import SellerBidTable from "./../../Components/Seller Components/Seller_Bid_Table";
import CloseIcon from "@mui/icons-material/Close";

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

const SellerBid = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <SellerNavBar />
      <SellerHeader />
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
        <SellerSideNav />
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h1>Bids</h1>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                backgroundColor: "#8080D7",
                "&:hover": { backgroundColor: "#8080D7" },
                margin: "20px 0 0 0",
              }}
            >
              Add Bids
            </Button>

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
                      Open Bids
                    </Typography>
                  </Grid>
                  <Grid>
                    <Button sx={{ color: "black" }}>
                      <CloseIcon onClick={handleClose} />
                    </Button>
                  </Grid>
                </Grid>

                {/* Input Text Grids */}
                <Grid
                  container
                  marginBottom="20px"
                  justifyContent="space-between"
                >
                  <Typography variant="body1" fontWeight="bold">
                    Product
                  </Typography>
                  <TextField
                    variant="outlined"
                    sx={{ width: 320 }}
                    label="product name"
                    size="small"
                  />
                </Grid>
                <Grid
                  container
                  marginBottom="20px"
                  justifyContent="space-between"
                >
                  <Typography variant="body1" fontWeight="bold">
                    Base Price
                  </Typography>
                  <TextField
                    variant="outlined"
                    sx={{ width: 320 }}
                    label="250 USD / 5 ETH"
                    size="small"
                  ></TextField>
                </Grid>
                <Grid
                  container
                  marginBottom="20px"
                  justifyContent="space-between"
                  columnGap={5}
                >
                  <Typography variant="body1" fontWeight="bold">
                    Closing Time
                  </Typography>
                  <TextField
                    variant="outlined"
                    sx={{ width: 320 }}
                    label="Wednesday, 8 August 2022 11:50 AM"
                    size="small"
                  ></TextField>
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
          </Grid>
          <Typography variant="h6" margin="20px 0 10px 0">
            Seller Bids Table
          </Typography>
          <SellerBidTable />
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default SellerBid;
