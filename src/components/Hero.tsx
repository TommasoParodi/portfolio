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
          background: "linear-gradient(45deg, #ffffff, #FF6B35)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Tommaso Parodi
      </Typography>

      <Typography
        variant="h3"
        sx={{
          color: "primary.main",
          mb: 3,
          fontWeight: 500,
        }}
      >
        Front End Developer
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
        I'm a passionate front-end developer specializing in React and
        Material-UI. I love crafting high-performance, intuitive web
        applications with modern, elegant designs that deliver exceptional user
        experiences.
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
          View My Projects
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            minWidth: "200px",
            py: 1.5,
          }}
        >
          Contact Me
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
