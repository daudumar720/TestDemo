{
  /* Seller Model Component */
}
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
          Become a Seller
        </Typography>
      </Grid>
      <Grid>
        <Button sx={{ color: "black" }}>
          <CloseIcon />
        </Button>
      </Grid>
    </Grid>

    {/* Input Text Grids */}
    <Grid container columnGap={5} marginBottom="20px">
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="First Name"
        size="small"
      ></TextField>
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="Last Name"
        size="small"
      ></TextField>
    </Grid>
    <Grid container columnGap={5} marginBottom="20px">
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="Username"
        size="small"
      ></TextField>
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="Shopname"
        size="small"
      ></TextField>
    </Grid>
    <Grid container columnGap={5} marginBottom="20px">
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="Password"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <VisibilityOffIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="Confirm Password"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <VisibilityOffIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Grid>
    <Grid container columnGap={5} marginBottom="20px">
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="Country"
        size="small"
      ></TextField>
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="City"
        size="small"
      ></TextField>
    </Grid>
    <Grid container columnGap={5} marginBottom="20px">
      <TextField
        variant="outlined"
        sx={{ width: 320 }}
        label="Short bio..."
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
        Become a seller
      </Button>
    </Grid>
  </Box>
</Modal>;

{
  /* Sign In Model Component */
}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  {/* Modal Content */}
  <Box sx={style} width="320px">
    <Grid container justifyContent="space-between">
      <Grid>
        <Typography variant="h5" fontWeight="bold">
          Sign In
        </Typography>
      </Grid>
      <Grid>
        <Button sx={{ color: "black" }}>
          <CloseIcon />
        </Button>
      </Grid>
      <Grid container>
        <Typography
          marginBottom={4}
          sx={{ color: "#818181", fontSize: "14px" }}
        >
          Please enter your login details to sign in.
        </Typography>
      </Grid>
    </Grid>

    {/* Input Text Grids */}
    <Grid container marginBottom="20px">
      <Grid marginBottom="20px">
        <TextField
          variant="outlined"
          sx={{ width: 320 }}
          label="Email"
          size="small"
        ></TextField>
      </Grid>
      <Grid container>
        <TextField
          variant="outlined"
          sx={{ width: 320 }}
          label="Password"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>
    </Grid>
    <Grid
      container
      marginBottom="20px"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* CheckBox */}
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: "#8080D7",
              "&.Mui-checked": {
                color: "#8080D7",
              },
            }}
          />
        }
        label={
          <Typography marginTop={1} color="#818181" fontSize="12px">
            Keep me logged in
          </Typography>
        }
      />
      <Typography marginTop={1} color="#8080D7" fontSize="12px">
        Forgot Password?
      </Typography>
    </Grid>
    {/* Add Button */}
    <Grid container justifyContent="center">
      <Button
        variant="contained"
        sx={{
          width: "320px",
          backgroundColor: "#8080D7",
          "&:hover": { backgroundColor: "#8080D7" },
        }}
      >
        Sign In
      </Button>
    </Grid>
    <Typography marginTop="10px" fontSize="12px" color="#818181">
      Don’t have an account? <MySpan>Sign up</MySpan>
    </Typography>
  </Box>
</Modal>;

{
  /* Sign Up Model Component */
}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  {/* Modal Content */}
  <Box sx={style} width="320px">
    <Grid container justifyContent="space-between">
      <Grid>
        <Typography variant="h5" fontWeight="bold">
          Sign Up
        </Typography>
      </Grid>
      <Grid>
        <Button sx={{ color: "black" }}>
          <CloseIcon />
        </Button>
      </Grid>
      <Grid container>
        <Typography
          marginBottom={4}
          sx={{ color: "#818181", fontSize: "14px" }}
        >
          Create a new account!
        </Typography>
      </Grid>
    </Grid>

    {/* Input Text Grids */}
    <Grid container marginBottom="20px">
      <Grid marginBottom="20px">
        <TextField
          variant="outlined"
          sx={{ width: 320 }}
          label="Full Name"
          size="small"
        ></TextField>
      </Grid>
      <Grid marginBottom="20px">
        <TextField
          variant="outlined"
          sx={{ width: 320 }}
          label="Email"
          size="small"
        ></TextField>
      </Grid>
      <Grid container marginBottom="20px">
        <TextField
          variant="outlined"
          sx={{ width: 320 }}
          label="Password"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>
      <Grid container>
        <TextField
          variant="outlined"
          sx={{ width: 320 }}
          label="Confirm Password"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>
    </Grid>
    <Grid
      container
      marginBottom="20px"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* CheckBox */}
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: "#8080D7",
              "&.Mui-checked": {
                color: "#8080D7",
              },
            }}
          />
        }
        label={
          <Typography marginTop={1} color="#818181" fontSize="12px">
            I agree to the Terms of Services and Policy
          </Typography>
        }
      />
    </Grid>
    {/* Add Button */}
    <Grid container justifyContent="center">
      <Button
        variant="contained"
        sx={{
          width: "320px",
          backgroundColor: "#8080D7",
          "&:hover": { backgroundColor: "#8080D7" },
        }}
      >
        Create an account
      </Button>
    </Grid>
    <Typography marginTop="10px" fontSize="12px" color="#818181">
      Already have an account? <MySpan>Sign in</MySpan>
    </Typography>
    <Typography marginTop="2px" fontSize="12px" color="#818181">
      OR? <MySpan>Become a seller</MySpan>
    </Typography>
  </Box>
</Modal>;
