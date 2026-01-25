import React, { useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { getAppTheme } from "./theme/theme";
import HomePage from "./pages/HomePage";
import { ThemeModeProvider, useThemeMode } from "./theme/ThemeModeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { LazyMotion, domAnimation } from "framer-motion";
import { NeoBackground } from "./components/NeoBackground";

function App() {
  return (
    <ThemeModeProvider>
      <ThemedApp />
    </ThemeModeProvider>
  );
}

export default App;

const ThemedApp: React.FC = () => {
  const { mode } = useThemeMode();
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NeoBackground />
        <ThemeToggle />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <HomePage />
        </Box>
      </ThemeProvider>
    </LazyMotion>
  );
};

