import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF6B35", // Modern vibrant orange
      light: "#FF8C65",
      dark: "#E55A2B",
    },
    secondary: {
      main: "#00BCD4", // Cyan accent that complements orange
      light: "#4DD0E1",
      dark: "#0097A7",
    },
    background: {
      default: "#0D1117", // Deep dark background (GitHub-inspired)
      paper: "#161B22", // Card background with subtle elevation
    },
    text: {
      primary: "#F0F6FC", // Soft white for better readability
      secondary: "#8B949E", // Muted gray for secondary text
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
          backgroundColor: "#FF6B35",
          "&:hover": {
            backgroundColor: "#FF8C65",
          },
        },
        outlined: {
          borderColor: "#FF6B35",
          color: "#FF6B35",
          "&:hover": {
            borderColor: "#FF8C65",
            backgroundColor: "rgba(255, 107, 53, 0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#161B22",
          borderRadius: "12px",
          border: "1px solid rgba(240, 246, 252, 0.1)",
          "&:hover": {
            borderColor: "rgba(255, 107, 53, 0.4)",
            boxShadow: "0 4px 12px rgba(255, 107, 53, 0.15)",
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
          borderColor: "#FF6B35",
          color: "#FF6B35",
          "&:hover": {
            backgroundColor: "rgba(255, 107, 53, 0.15)",
            borderColor: "#FF8C65",
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
