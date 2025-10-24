import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9800", // Orange accent color
      light: "#ffb74d",
      dark: "#f57c00",
    },
    secondary: {
      main: "#ff5722", // Deep orange accent color
      light: "#ff8a65",
      dark: "#d84315",
    },
    background: {
      default: "#263238", // Anthracite gray background
      paper: "#37474f", // Slightly lighter for cards
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 500,
          padding: "12px 24px",
        },
        contained: {
          backgroundColor: "#ff9800",
          "&:hover": {
            backgroundColor: "#ffb74d",
          },
        },
        outlined: {
          borderColor: "#ff9800",
          color: "#ff9800",
          "&:hover": {
            borderColor: "#ffb74d",
            backgroundColor: "rgba(255, 152, 0, 0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#37474f",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          "&:hover": {
            borderColor: "rgba(255, 152, 0, 0.3)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          fontWeight: 500,
        },
        outlined: {
          borderColor: "#ff9800",
          color: "#ff9800",
          "&:hover": {
            backgroundColor: "rgba(255, 152, 0, 0.1)",
          },
        },
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
