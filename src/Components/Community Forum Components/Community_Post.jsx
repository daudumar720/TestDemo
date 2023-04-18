import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Grid,
  Avatar,
  Button,
  styled,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import ThumbDownOffAltRoundedIcon from "@mui/icons-material/ThumbDownOffAltRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CommunityPost = () => {
  const SubHeading = styled(Typography)({
    fontWeight: "bold",
    fontSize: "18px",
  });
  return (
    <Box>
      <Container
        sx={{
          borderRadius: "8px",
          paddingTop: "10px",
          margin: "10px 0 50px 0",
          boxShadow: "2px 10px 12px 0 #D1D1D1",
        }}
      >
        <Typography
          fontWeight={500}
          color="#000000"
          fontSize="22px"
          margin="20px 0 10px 0"
        >
          New NFT’s in marketplace
        </Typography>

        {/* Chips */}
        <Stack direction="row" spacing={1}>
          <Chip label="NFTs" />
          <Chip label="Create NFTs" variant="outlined" />
          <Chip label="Buy NFTs" variant="outlined" />
        </Stack>

        {/* Avatar and Follow Grid */}
        <Grid container alignItems="center" marginBottom="20px">
          {/* Avatar */}
          <Grid
            container
            columnGap={2}
            alignItems="center"
            marginTop={3}
            xs={11}
          >
            <Avatar
              alt="John Berry"
              src={require("../../Images/images.jpeg")}
            />
            <Typography fontWeight="bold" color="#818181">
              @john_berry
            </Typography>
            <Typography color="#818181" fontSize="11px">
              12 July, 2022 11:54 AM
            </Typography>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8080D7",
                "&:hover": { backgroundColor: "#8080D7" },
              }}
            >
              Follow
            </Button>
          </Grid>
        </Grid>

        {/* Image Box */}
        <Box marginBottom="20px">
          <img
            src={require("../../Images/art/khara.jpg")}
            alt="post-img"
            width="800px"
            height="400px"
          />
        </Box>

        {/* Description Content */}
        <Box marginBottom="20px">
          <SubHeading>Description</SubHeading>
          <Typography
            fontSize="14px"
            color="#818181"
            width="600px"
            marginTop="4px"
          >
            Hendrerit interdum sit massa lobortis. Habitant faucibus lorem dui
            mauris. Pellentesque nunc tortor quam consequat odio. Sed faucibus
            id rhoncus, scelerisque tristique ultricies nam toue. Hendrerit
            interdum sit massa lobortis. Habitant faucibus lorem dui mauris.
            Pellentesque nunc, tortor quam consequat odio. Sed faucibus id
            rhoncus, scelerisque tristique ultricies nam...
          </Typography>
          <Typography
            sx={{ color: "#8080D7", textDecoration: "underline" }}
            fontSize="14px"
          >
            see more
          </Typography>
        </Box>

        {/* Icons Stack */}
        <Grid container alignItems="center" marginBottom="20px">
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                icon={<ThumbUpOutlinedIcon />}
                checkedIcon={<ThumbUpRoundedIcon sx={{ color: "black" }} />}
              />
            }
            label={<Typography fontSize="14px">200</Typography>}
          />

          <FormControlLabel
            control={
              <Checkbox
                {...label}
                icon={<ThumbDownOffAltRoundedIcon />}
                checkedIcon={
                  <ThumbDownAltRoundedIcon sx={{ color: "black" }} />
                }
              />
            }
            label={<Typography fontSize="14px">49</Typography>}
          />

          <Typography fontSize="16px" marginRight="10px" fontWeight="bold">
            Comments
          </Typography>
          <Typography fontSize="14px">12</Typography>
        </Grid>

        <Divider />
        <Grid
          container
          margin="10px 0 10px 0"
          alignItems="center"
          justifyContent="space-between"
        >
          <Avatar alt="John Berry" src={require("../../Images/images.jpeg")} />
          {/* Comment Bar */}
          <TextField
            size="small"
            id="outlined-basic"
            label="Add a comment..."
            variant="outlined"
            sx={{ width: "1040px", margin: "20px 0 20px 0" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunityPost;
