import { Box, ButtonBase, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom"

export default function Hub() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <Grid item xs={6}>
        <Box
          sx={{
            backgroundImage: `url("https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/hong-kong-casinos-cover.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: 650,
            height: 550,
            bgcolor: "black",
            margin: "auto",
            borderRadius: 5,
          }}
        >
          <Stack direction="column">
            <ButtonBase
              sx={{
                width: 300,
                margin: "auto",
                height: 50,
                marginTop: 2,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#000000b3",
                color: "white",
                fontFamily: "Nunito",
                fontSize: 20,
                cursor: "auto",
              }}
            >
              Ruleta Americana
            </ButtonBase>

            <ButtonBase
              sx={{
                width: 300,
                margin: "auto",
                height: 50,
                marginTop: 50,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#03133f",
                color: "white",
                fontFamily: "Abel",
                fontSize: 20,
              }}
            >
              <Link to="./Roulette">
                Jugar
              </Link>
            </ButtonBase>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            backgroundImage: `url("https://www.bestonlinecasino.com/es/files/mesa-de-blackjack-clasico-microgaming.jpg")`,
            backgroundPosition: "top",
            width: 650,
            height: 550,
            bgcolor: "white",
            margin: "auto",
            borderRadius: 5,
          }}
        >
          <Stack direction="column">
            <ButtonBase
              sx={{
                width: 300,
                margin: "auto",
                height: 50,
                marginTop: 2,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#000000b3",
                color: "white",
                fontFamily: "Nunito",
                fontSize: 20,
                cursor: "auto",
              }}
            >
              BlackJack
            </ButtonBase>
            <ButtonBase
              sx={{
                width: 300,
                margin: "auto",
                height: 50,
                marginTop: 50,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#03133f",
                color: "white",
                fontFamily: "Abel",
                fontSize: 20,
              }}
            >
              <Link to="./Login">
                Jugar
              </Link>
            </ButtonBase>
          </Stack>
        </Box>
      </Grid>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      ></Box>
    </Grid>
  );
}
