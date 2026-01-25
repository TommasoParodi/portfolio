import React from "react";
import { Box } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

export const NeoBackground: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: -120,
          background: isDark
            ? `radial-gradient(900px 700px at 18% 22%, ${alpha(
                theme.palette.primary.main,
                0.22
              )} 0%, transparent 55%),
               radial-gradient(900px 700px at 84% 70%, ${alpha(
                theme.palette.secondary.main,
                0.18
              )} 0%, transparent 55%),
               radial-gradient(700px 600px at 52% 88%, ${alpha(
                theme.palette.primary.main,
                0.12
              )} 0%, transparent 60%)`
            : `radial-gradient(900px 700px at 18% 22%, ${alpha(
                theme.palette.secondary.main,
                0.18
              )} 0%, transparent 58%),
               radial-gradient(900px 700px at 84% 70%, ${alpha(
                theme.palette.primary.main,
                0.14
              )} 0%, transparent 58%),
               radial-gradient(700px 600px at 52% 88%, ${alpha(
                theme.palette.secondary.main,
                0.10
              )} 0%, transparent 62%)`,
          filter: "blur(10px)",
          animation: "neoShift 18s ease-in-out infinite",
          transform: "translate3d(0,0,0)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: isDark ? 0.08 : 0.06,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          mixBlendMode: isDark ? "screen" : "multiply",
          pointerEvents: "none",
        },
        "@keyframes neoShift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "40%": { transform: "translate3d(18px, -10px, 0) scale(1.02)" },
          "70%": { transform: "translate3d(-16px, 12px, 0) scale(1.03)" },
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&::before": {
            animation: "none",
            transform: "none",
          },
        },
      }}
    />
  );
};


