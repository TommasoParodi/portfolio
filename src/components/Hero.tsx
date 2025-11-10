import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 8,
        px: 2,
        overflow: "hidden",
        marginLeft: "calc(-50vw + 50%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 188, 212, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)
          `,
          animation: "pulse 15s ease-in-out infinite",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to bottom, transparent 0%, #0D1117 100%)",
          zIndex: 0,
        },
        "@keyframes pulse": {
          "0%, 100%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 0.8,
            transform: "scale(1.1)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
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
            component="a"
            href="mailto:tommasoparodi99@gmail.com"
            sx={{
              minWidth: "200px",
              py: 1.5,
              textDecoration: "none",
            }}
          >
            Contact Me
          </Button>
        </Stack>
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          opacity: isScrolled ? 0 : 1,
          transition: "opacity 0.3s ease-out",
          pointerEvents: isScrolled ? "none" : "auto",
          animation: isScrolled ? "none" : "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "50%": {
              transform: "translateX(-50%) translateY(10px)",
            },
          },
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRight: "2px solid",
            borderBottom: "2px solid",
            borderColor: "primary.main",
            transform: "rotate(45deg)",
            opacity: 0.7,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
