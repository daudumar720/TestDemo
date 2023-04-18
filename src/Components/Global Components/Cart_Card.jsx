import * as React from "react";
import {
  Card,
  Typography,
  styled,
  Grid,
  CardActions,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function CartCard() {
  const ImgTag = styled("img")({
    width: "160px",
    height: "160px",
  });
  return (
    <Card
      sx={{
        width: "640px",
        boxShadow: "12px 10px 12px 6px #D1D1D1",
        marginY: "20px",
        // cursor: "pointer",
      }}
    >
      <Grid container>
        {/* Image */}
        <ImgTag src={require("../../Images/nft_card.jpg")} alt="nft" />
        <Stack sx={{ margin: "16px" }}>
          {/* Title */}
          <Typography gutterBottom variant="h6" component="div">
            3d asthetics with shapes
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Price:
          </Typography>
          {/* Price */}
          <Typography variant="body2" color="text.secondary">
            12.5 USD
          </Typography>
          <CardActions>
            <Button variant="outlined" size="small">
              Remove
            </Button>
            <Button variant="outlined" size="small">
              Add to Wishlist
            </Button>
          </CardActions>
        </Stack>
        {/* Check Box */}
        {/* <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-end"
          sx={{ width: "300px" }}
        >
          <FormControlLabel
            sx={{ color: "#818181" }}
            value="end"
            control={
              <Checkbox
                sx={{
                  color: "#818181",
                  "&.Mui-checked": {
                    color: "#8080D7",
                  },
                }}
              />
            }
          />
        </Grid> */}
      </Grid>
    </Card>
  );
}
