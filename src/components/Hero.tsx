import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { fadeUp, fadeIn, tapPress } from "../utils/motion";

const Hero: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
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

  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 450], [0, reduceMotion ? 0 : -32]);
  const orbX = useTransform(scrollY, [0, 450], [0, reduceMotion ? 0 : 18]);

  return (
    <Box
      component={motion.section}
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
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `radial-gradient(700px 500px at 50% 40%, ${alpha(
            theme.palette.primary.main,
            theme.palette.mode === "dark" ? 0.16 : 0.12
          )} 0%, transparent 60%)`,
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      {/* Decorative orb (parallax) */}
      <Box
        component={motion.div}
        style={{ x: orbX, y: orbY }}
        sx={{
          position: "absolute",
          top: { xs: 90, md: 110 },
          left: { xs: "14%", md: "18%" },
          width: { xs: 160, md: 220 },
          height: { xs: 160, md: 220 },
          borderRadius: 999,
          background: `radial-gradient(circle at 30% 30%, ${alpha(
            theme.palette.secondary.main,
            theme.palette.mode === "dark" ? 0.42 : 0.28
          )}, transparent 60%)`,
          filter: "blur(2px)",
          opacity: theme.palette.mode === "dark" ? 0.8 : 0.7,
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 920,
        }}
      >
        <Typography
          component={motion.h1}
          variants={fadeUp(0)}
          variant="h1"
          sx={{
            mb: 2,
            background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tommaso Parodi
        </Typography>

        <Typography
          component={motion.h2}
          variants={fadeUp(0.12)}
          variant="h3"
          sx={{
            color: theme.palette.mode === "dark" ? "primary.main" : "text.primary",
            mb: 3,
            fontWeight: 500,
          }}
        >
          Frontend Developer
        </Typography>

        <Typography
          component={motion.p}
          variants={fadeUp(0.22)}
          variant="body1"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            mb: 4,
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: alpha(theme.palette.text.primary, theme.palette.mode === "dark" ? 0.78 : 0.85),
          }}
        >
          I'm a passionate front-end developer specializing in React and
          Material-UI. I love crafting high-performance, intuitive web
          applications with modern, elegant designs that deliver exceptional user
          experiences.
        </Typography>

        <Stack
          component={motion.div}
          variants={fadeIn(0.32)}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{
            mt: 4,
          }}
        >
          <Box
            component={motion.div}
            variants={tapPress}
            whileTap="tap"
            sx={{ display: "inline-block" }}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                const projectsSection = document.querySelector(
                  '[data-section="projects"]'
                );
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                minWidth: "200px",
                py: 1.5,
                boxShadow: `0 14px 50px ${alpha(theme.palette.primary.main, 0.16)}`,
              }}
            >
              View My Projects
            </Button>
          </Box>
          <Box
            component={motion.div}
            variants={tapPress}
            whileTap="tap"
            sx={{ display: "inline-block" }}
          >
            <Button
              variant="contained"
              size="large"
              component="a"
              href="mailto:tommasoparodi99@gmail.com"
              sx={{
                minWidth: "200px",
                py: 1.5,
                textDecoration: "none",
                boxShadow: `0 18px 60px ${alpha(theme.palette.primary.main, 0.22)}`,
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        sx={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          opacity: isScrolled ? 0 : 1,
          transition: "opacity 0.3s ease-out",
          pointerEvents: isScrolled ? "none" : "auto",
        }}
        animate={
          reduceMotion || isScrolled
            ? undefined
            : { y: [0, 8, 0] }
        }
        transition={
          reduceMotion || isScrolled
            ? undefined
            : {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
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
