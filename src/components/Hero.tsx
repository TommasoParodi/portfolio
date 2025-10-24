import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mb: 2,
          background: "linear-gradient(45deg, #ffffff, #ff9800)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Mario Rossi
      </Typography>

      <Typography
        variant="h3"
        sx={{
          color: "primary.main",
          mb: 3,
          fontWeight: 500,
        }}
      >
        Sviluppatore Web Full-Stack
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: "600px",
          mx: "auto",
          mb: 4,
          fontSize: "1.1rem",
          lineHeight: 1.7,
        }}
      >
        Sono un appassionato sviluppatore web con una forte specializzazione in
        React e Material-UI. Il mio obiettivo è creare applicazioni web
        performanti, intuitive e dal design moderno.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Button
          variant="outlined"
          size="large"
          sx={{
            minWidth: "200px",
            py: 1.5,
          }}
        >
          Vedi i miei Progetti
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            minWidth: "200px",
            py: 1.5,
          }}
        >
          Contattami
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
