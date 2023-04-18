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

export default function WishlistCard() {
  const ImgTag = styled("img")({
    width: "160px",
    height: "160px",
  });
  return (
    <Card
      sx={{
        maxWidth: 720,
        boxShadow: "12px 10px 12px 0 #D1D1D1",
        marginY: "20px",
      }}
    >
      <Grid container>
        <ImgTag src={require("../../Images/nft_card.jpg")} alt="nft" />
        <Stack sx={{ margin: "16px" }}>
          <Typography gutterBottom variant="h6" component="div">
            3d asthetics with shapes
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Price:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            12.5 USD
          </Typography>
          <CardActions>
            <Button size="small">Remove</Button>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Stack>
      </Grid>
    </Card>
  );
}
