import React, { useContext } from "react";
import { Grid, Typography, styled, Divider, Button } from "@mui/material";
import { Context } from "../../Screens/Buyer Screens/cart";

const ImgTag = styled("img")({
  width: "80px",
  height: "80px",
  borderRadius: "6px",
});
const CartItem = ({ id, title, img, price, amount }) => {
  const { removeItem } = useContext(Context);
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <ImgTag src={require("../../Images/nft_card.jpg")} alt="nft" />
        {/* Title */}
        <Typography color="#818181">{title}</Typography>
        {/* Price */}
        <Typography>$ {price}</Typography>
        <Button variant="outlined" size="small" color="secondary">
          Add to Wishlist
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={() => removeItem(id)}
        >
          Remove
        </Button>
      </Grid>
      <Divider sx={{ marginY: "16px", width: "100%" }} />
    </>
  );
};

export default CartItem;
