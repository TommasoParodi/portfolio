import React, { useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { getAppTheme } from "./theme/theme";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { ThemeModeProvider, useThemeMode } from "./theme/ThemeModeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { LazyMotion, domAnimation } from "framer-motion";
import { NeoBackground } from "./components/NeoBackground";

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Outlet />
        </Box>
      ),
      children: [
        { index: true, element: <HomePage /> },
        { path: "progetti/:slug", element: <ProjectDetailPage /> },
      ],
    },
  ],
  { basename: baseUrl }
);

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
        <RouterProvider router={router} />
      </ThemeProvider>
    </LazyMotion>
  );
};


