import { createTheme, alpha } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import type { ThemeMode } from "./ThemeModeProvider";

const neonOrange = "#FF6B35";
const neonCyan = "#00BCD4";

export function getAppTheme(mode: ThemeMode) {
  const isDark = mode === "dark";

  const base: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: neonOrange,
        light: "#FF8C65",
        dark: "#E55A2B",
      },
      secondary: {
        main: neonCyan,
        light: "#4DD0E1",
        dark: "#0097A7",
      },
      background: isDark
        ? { default: "#0B0F16", paper: "#111827" }
        : { default: "#F7FAFF", paper: "#FFFFFF" },
      text: isDark
        ? { primary: "#F2F7FF", secondary: "#9AA4B2" }
        : { primary: "#0B1220", secondary: "#4B5565" },
      divider: isDark ? "rgba(242, 247, 255, 0.10)" : "rgba(11, 18, 32, 0.10)",
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.2 },
      h2: { fontSize: "3rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.8 },
      h3: { fontSize: "2.25rem", fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.6 },
      h4: { fontSize: "1.85rem", fontWeight: 650, lineHeight: 1.25 },
      h5: { fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.3 },
      h6: { fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.35 },
      body1: { fontSize: "1rem", lineHeight: 1.7 },
      body2: { fontSize: "0.925rem", lineHeight: 1.7 },
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
        easeOut: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
        easeIn: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
    breakpoints: {
      values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    },
  };

  return createTheme({
    ...base,
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          ":root": {
            colorScheme: mode,
          },
          body: {
            backgroundImage: isDark
              ? `radial-gradient(1200px 800px at 10% 15%, ${alpha(neonOrange, 0.14)} 0%, transparent 60%),
                 radial-gradient(900px 700px at 80% 70%, ${alpha(neonCyan, 0.12)} 0%, transparent 55%),
                 linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(
                  theme.palette.background.default,
                  0.94
                )} 100%)`
              : `radial-gradient(1200px 800px at 10% 20%, ${alpha(neonCyan, 0.14)} 0%, transparent 55%),
                 radial-gradient(900px 700px at 85% 65%, ${alpha(neonOrange, 0.12)} 0%, transparent 55%),
                 linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(
                  theme.palette.background.default,
                  0.98
                )} 100%)`,
            backgroundAttachment: "fixed",
          },
          "::selection": {
            background: alpha(neonOrange, isDark ? 0.35 : 0.25),
          },
        }),
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 650,
            padding: "12px 22px",
            transition: theme.transitions.create(["transform", "box-shadow", "background-color"], {
              duration: 250,
              easing: theme.transitions.easing.easeOut,
            }),
            "&.Mui-focusVisible": {
              outline: `3px solid ${alpha(theme.palette.primary.main, 0.55)}`,
              outlineOffset: 3,
            },
          }),
          contained: ({ theme }) => ({
            backgroundImage: `linear-gradient(135deg, ${neonOrange}, ${alpha(neonCyan, 0.9)})`,
            boxShadow: `0 16px 50px ${alpha(neonOrange, isDark ? 0.25 : 0.18)}`,
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `0 22px 70px ${alpha(neonOrange, isDark ? 0.35 : 0.22)}`,
            },
          }),
          outlined: ({ theme }) => ({
            borderColor: alpha(neonOrange, isDark ? 0.55 : 0.45),
            color: theme.palette.text.primary,
            backgroundColor: alpha(theme.palette.background.paper, isDark ? 0.12 : 0.6),
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            "&:hover": {
              transform: "translateY(-2px)",
              borderColor: alpha(neonCyan, isDark ? 0.6 : 0.5),
              backgroundColor: alpha(theme.palette.background.paper, isDark ? 0.18 : 0.75),
            },
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: "none",
            backgroundColor: alpha(theme.palette.background.paper, isDark ? 0.62 : 0.85),
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: `1px solid ${alpha(theme.palette.text.primary, isDark ? 0.10 : 0.08)}`,
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 18,
            overflow: "hidden",
            backgroundColor: alpha(theme.palette.background.paper, isDark ? 0.60 : 0.90),
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: `1px solid ${alpha(theme.palette.text.primary, isDark ? 0.10 : 0.08)}`,
            transition: theme.transitions.create(["transform", "box-shadow", "border-color"], {
              duration: 300,
              easing: theme.transitions.easing.easeOut,
            }),
            "&:hover": {
              transform: "translateY(-6px)",
              borderColor: alpha(neonOrange, isDark ? 0.35 : 0.25),
              boxShadow: `0 28px 90px ${alpha("#000", isDark ? 0.55 : 0.18)}`,
            },
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 999,
            fontWeight: 650,
            backgroundColor: alpha(theme.palette.background.paper, isDark ? 0.18 : 0.65),
            border: `1px solid ${alpha(theme.palette.text.primary, isDark ? 0.12 : 0.10)}`,
          }),
          outlined: ({ theme }) => ({
            borderColor: alpha(neonOrange, isDark ? 0.55 : 0.40),
            color: theme.palette.text.primary,
            "&:hover": {
              backgroundColor: alpha(neonOrange, isDark ? 0.14 : 0.10),
              borderColor: alpha(neonCyan, isDark ? 0.55 : 0.40),
              transform: "translateY(-2px)",
            },
          }),
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingTop: "2rem",
            paddingBottom: "2rem",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            transition: theme.transitions.create(["transform", "background-color"], {
              duration: 200,
              easing: theme.transitions.easing.easeOut,
            }),
            "&.Mui-focusVisible": {
              outline: `3px solid ${alpha(theme.palette.primary.main, 0.55)}`,
              outlineOffset: 3,
            },
          }),
        },
      },
    },
  });
}

