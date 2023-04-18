import React, { useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  styled,
  Divider,
  Button,
} from "@mui/material";
import { Context } from "./cart";
import CartItem from "../../Components/Buyer Components/Cart_Item";

const header = {
  height: "160px",
  backgroundColor: "#8080D7",
  zIndex: "-1",
  position: "absolute",
};

const Span = styled("span")({
  color: "black",
  fontSize: "16px",
  fontWeight: "bold",
});

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(Context);

  return (
    <>
      {/* Main Header */}
      <Grid
        sx={header}
        container
        alignItems="center"
        justifyContent="flex-start"
      >
        <Container maxWidth="xl">
          <Grid item>
            <Typography variant="h4" color="#fff">
              Shopping Cart
            </Typography>
          </Grid>
        </Container>
      </Grid>

      {/* Main Data Container */}
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          paddingTop: "20px",
          marginTop: "120px",
          paddingBottom: "20px",
          borderRadius: "8px",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h5" marginY={1}>
              Cart Items
            </Typography>
            <Typography variant="body2" color="#818181" marginY={1}>
              You have <Span>{totalItem}</Span> items in the Shopping Cart
            </Typography>
            <Divider />
          </Box>

          {/* Data Grid */}
          <Grid container justifyContent="space-around" marginY="20px">
            {/* Cart Items Box */}
            <Grid
              sx={{
                width: "860px",
                height: "450px",
                padding: "20px",
                border: "1px solid #D1D1D1",
                borderRadius: "6px",
                overflowY: "scroll",
              }}
            >
              {item.map((currItem) => {
                return <CartItem key={currItem.id} {...currItem} />;
              })}
            </Grid>

            {/* Billing Box */}
            <Grid>
              <Box
                sx={{
                  width: "420px",
                  paddingBottom: "20px",
                  border: "1px solid #D1D1D1",
                  borderRadius: "6px",
                }}
              >
                <Container sx={{ marginY: "20px" }}>
                  <Typography variant="h5">Checkout your products</Typography>
                </Container>
                <Divider width="80%" sx={{ margin: "auto" }} />
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        Total Products
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="body1">{totalItem}</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Container sx={{ marginY: "20px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography variant="body1" color="#818181">
                        Subtotal
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="body1">$ {totalAmount}</Typography>
                    </Grid>
                  </Grid>
                </Container>

                <Divider
                  width="80%"
                  sx={{ margin: "auto", marginBottom: "20px" }}
                />

                <Grid container justifyContent="center" columnGap={3}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#8080D7",
                      "&:hover": { backgroundColor: "#8080D7" },
                      padding: "12px",
                    }}
                  >
                    Checkout
                  </Button>
                  <Button
                    onClick={clearCart}
                    variant="contained"
                    sx={{
                      padding: "12px",
                    }}
                  >
                    Clear Cart
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default ContextCart;
