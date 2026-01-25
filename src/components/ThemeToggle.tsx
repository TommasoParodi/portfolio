import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useThemeMode } from "../theme/ThemeModeProvider";

export const ThemeToggle: React.FC = () => {
  const { mode, toggleMode } = useThemeMode();

  const label = mode === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro";

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: 14, sm: 18 },
        right: { xs: 14, sm: 18 },
        zIndex: (t) => t.zIndex.modal + 1,
      }}
    >
      <Tooltip title={label} arrow>
        <IconButton
          aria-label={label}
          onClick={toggleMode}
          size="medium"
          sx={{
            width: 44,
            height: 44,
            borderRadius: 999,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            "&:hover": {
              transform: "translateY(-1px)",
              backgroundColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 16px 56px rgba(0,0,0,0.45)",
            },
            "&:focus-visible": {
              outline: "3px solid",
              outlineColor: "primary.main",
              outlineOffset: 3,
            },
            transition: (t) =>
              t.transitions.create(["transform", "background-color", "box-shadow"], {
                duration: 250,
                easing: t.transitions.easing.easeOut,
              }),
          }}
        >
          {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};


