import { Box, ButtonBase, Grid, Link } from "@mui/material";
import { Stack } from "@mui/system";

export default function Hub() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url("data:image/jpeg;base64,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")`,
      
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
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Abel",
                  fontSize: 20,
                }}
                href="./Roulette"
              >
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
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Abel",
                  fontSize: 20,
                }}
                href="./Login"
                variant="body2"
              >
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
