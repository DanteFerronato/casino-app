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
import {createTheme, ThemeProvider } from "@mui/material/styles";
// import RalewayWoff2 from './CairoPlayFont.ttf';

<<<<<<< HEAD:src/my-app-type/src/Login.tsx

const theme = createTheme({
//   typography: {
//     fontFamily: 'Raleway, Arial',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Raleway';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
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

export default function SignIn() {
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
        padding: 10,
        backgroundImage: `url("https://cdni.russiatoday.com/actualidad/public_images/2018.12/article/5c22479408f3d99b5d8b4567.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={20}
        sx={{
          width: 500,
          height: 600,
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
              <Typography component="h1" variant="h5">
                Sign in
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
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      sx={{
                        color: "gainsboro",
                      }}
                      href="#"
                      variant="body2"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      sx={{
                        color: "gainsboro",
                      }}
                      href="#"
                      variant="body2"
                    >
                      {"Don't have an account? Sign Up"}
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
=======
export default function Login() {
    return (
        <div className="main">
            <div className="container a-container" id="a-container">
            <form className="form" id="a-form" method="" action="">
                <h2 className="form_title title">Create Account</h2>
            
                <input className="form__input" type="text" placeholder="Name" />
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password" />
                <input className="form__input" type="password" placeholder="Confirm Password" />
                <button id= "SignUpBtn" className="form__button button submit">Sign up</button>
            </form>
            </div>
            <div className="container b-container" id="b-container">
            <form className="form" id="b-form" method="" action="">
                <h2 className="form_title title">Enter Casino Royale</h2>
            
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password" />
                <a className="form__link">¿Forgot your password?</a>
                <button id= "SignInBtn" className="form__button button submit">Sign In</button>
            </form>
            </div>
            <div className="switch" id="switch-cnt">
            <div className="switch__circle" />
            <div className="switch__circle switch__circle--t" />
            <div className="switch__container" id="switch-c1">
                <h2 className="switch__title title">We missed you!</h2>
                <p className="switch__description description">Enter your personal information to play again</p>
                <button className="switch__button button switch-btn">Sign In</button>
            </div>
            <div className="switch__container is-hidden" id="switch-c2">
                <h2 className="switch__title title">Welcome!</h2>
                <p className="switch__description description">Enter your personal data to start this journey with us</p>
                <button className="switch__button button switch-btn">Sign up</button>
            </div>
            </div>
            <script src="loginMenu.js"></script>
            <div id="holder"></div>
            <script src="waves.js"></script>
        </div>
    )
}
>>>>>>> origin/master:react/src/Login.tsx
