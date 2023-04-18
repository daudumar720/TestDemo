import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  styled,
  Grid,
  Divider,
  Avatar,
} from "@mui/material";

export default function NFTCard() {
  const ImgTag = styled("img")({
    width: "400px",
    height: "360px",
  });
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "12px 10px 12px 0 #D1D1D1" }}>
      <ImgTag src={require("../../Images/nft_card.jpg")} alt="nft" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
          3d asthetic with shapes
        </Typography>
        <Typography fontWeight="bold">Current bid:</Typography>
        <Grid container columnGap={1} marginBottom="10px">
          <Typography fontWeight="bold" fontSize="14px">
            0.156 ETH
          </Typography>
          <Typography fontWeight="bold" fontSize="14px" color="#818181">
            (=$569.76)
          </Typography>
        </Grid>
        <Divider />
        <Grid container columnGap={3} alignItems="center" marginTop={1}>
          <Avatar alt="John Berry" src={require("../../Images/images.jpeg")} />
          <Typography fontWeight="bold">@john_berry</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
