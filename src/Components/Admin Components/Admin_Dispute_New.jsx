import React from "react";
import {
  Card,
  styled,
  Button,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@mui/material";

const AdminDisputeNew = () => {
  const ImgTag = styled("img")({
    marginRight: "50PX",
    width: "250px",
    height: "150px",
  });
  return (
    <Card sx={{ marginBottom: "20px" }}>
      <Grid container>
        <Grid item>
          <ImgTag src={require("../../Images/new.jpeg")} alt="avatar" />
        </Grid>
        <Grid item>
          <Typography
            fontSize="24px"
            fontWeight="bold"
            marginTop="5px"
            marginBottom="5px"
          >
            Product Name
          </Typography>
          <Grid container alignItems="center">
            <Typography
              fontWeight="bold"
              fontSize="14px"
              variant="body2"
              sx={{ marginRight: "45px" }}
            >
              Reason
            </Typography>
            <Typography fontSize="12px" color="#818181">
              Hendrerit interdum sit ris ?
            </Typography>
          </Grid>
          <Grid container alignItems="center" marginBottom="10px">
            <Typography
              fontWeight="bold"
              fontSize="14px"
              variant="body2"
              sx={{ marginRight: "20px" }}
            >
              Description
            </Typography>
            <Typography fontSize="12px" color="#818181">
              Hendrerit interdum sit massa lobortis. Hendrerit interdum sit
              massa lobortis.Hendrerit interdum sit massa lobortis.
            </Typography>
          </Grid>
          <Divider />
          <Grid
            container
            sx={{ marginTop: "10px" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight="bold" fontSize="18px" variant="body2">
              Response
            </Typography>
            <TextField
              variant="outlined"
              label="Enter your response..."
              size="small"
              sx={{ width: "300px" }}
            />
            <Button variant="outlined" color="error">
              Reject
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8080D7",
                "&:hover": { backgroundColor: "#8080D7" },
              }}
            >
              Accept
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AdminDisputeNew;
