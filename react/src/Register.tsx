import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
});

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="gainsboro" align="center" {...props}>
      {"Copyright © "}
      Casino Royale {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Register() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          padding: 3,
          backgroundImage: `url("https://cdni.russiatoday.com/actualidad/public_images/2018.12/article/5c22479408f3d99b5d8b4567.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Paper
          elevation={20}
          sx={{
            width: 500,
            height: 720,
            margin: "auto",
            bgcolor: "#000000c9",
          }}
        >
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  fontFamily: "Monospace",
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "green" }}></Avatar>
                <Typography
                  sx={{
                    color: "white",
                  }}
                  component="h1"
                  variant="h5"
                >
                  Register
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      // "& .MuiInput-underline:hover:after": {
                      //   borderBottomColor: "red",
                      // },
                      "& .MuiInput-underline:hover:before": {
                        borderBottom: "3px solid #fafafade !important",
                      },
                      "& .MuiInputLabel-standard": {
                        color: "white",
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    }}
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      // "& .MuiInput-underline:hover:after": {
                      //   borderBottomColor: "red",
                      // },
                      "& .MuiInput-underline:hover:before": {
                        borderBottom: "3px solid #fafafade !important",
                      },
                      "& .MuiInputLabel-standard": {
                        color: "white",
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    }}
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      // "& .MuiInput-underline:hover:after": {
                      //   borderBottomColor: "red",
                      // },
                      "& .MuiInput-underline:hover:before": {
                        borderBottom: "3px solid #fafafade !important",
                      },
                      "& .MuiInputLabel-standard": {
                        color: "white",
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    }}
                    variant="standard"
                    color="primary"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      // "& .MuiInput-underline:hover:after": {
                      //   borderBottomColor: "red",
                      // },
                      "& .MuiInput-underline:hover:before": {
                        borderBottom: "3px solid #fafafade !important",
                      },
                      "& .MuiInputLabel-standard": {
                        color: "white",
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    }}
                    variant="standard"
                    color="primary"
                    margin="normal"
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirm password"
                    type="password"
                    id="confirm-password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    sx={{
                      color: "gainsboro",
                      mt: 3,
                      "& .MuiButtonBase-root": {
                        color: "white",
                      },
                      "& .MuiCheckbox-root.Mui-checked": {
                        color: "#2e7d32",
                      },
                    }}
                    color="success"
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    sx={{
                      mt: 3,
                      mb: 3,
                      borderRadius: 10,
                      height: 40,
                    }}
                  >
                    <Link
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "Arial",
                        fontSize: 13,
                      }}
                      href="./"
                    >
                      Sign Up
                    </Link>
                  </Button>
                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <Link
                        sx={{
                          color: "gainsboro",
                        }}
                        href="./Login"
                        variant="body2"
                      >
                        {"Already have an account? Log in"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 7, mb: 4 }} />
            </Container>
          </ThemeProvider>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
