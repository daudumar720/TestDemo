import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, styled } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function CommunityMyPostCard() {
  const ImgTag = styled("img")({
    width: "auto",
    height: "200px",
  });
  return (
    <Container sx={{ margin: "20px 0 20px 0" }}>
      <Card sx={{ maxWidth: 1000, boxShadow: "10px 0 10px #D1D1D1" }}>
        <Grid container>
          <Grid xs={2}>
            <ImgTag src={require("../../Images/nft_card.jpg")} alt="nft" />
          </Grid>
          <Grid
            justifyContent="center"
            marginTop="20px"
            marginLeft="50px"
            xs={6}
          >
            <Grid item>
              <Typography
                gutterBottom
                variant="h4"
                fontWeight="bold"
                component="div"
              >
                Post 1
              </Typography>
            </Grid>
            <Grid items xs={10}>
              <Typography gutterBottom variant="h6" component="div">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          <Box sx={{ marginLeft: "700px" }} />
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#8080D7",
              "&:hover": { backgroundColor: "#8080D7" },
            }}
          >
            Edit Post
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
