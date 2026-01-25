import React from "react";
import { Box, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../utils/motion";

interface EducationCardProps {
  title: string;
  institution: string;
  period: string;
  isLast?: boolean;
  index?: number;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  institution,
  period,
  isLast = false,
  index = 0,
}) => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component={motion.div}
      className="timeline-card"
      variants={reduceMotion ? undefined : fadeUp(index * 0.06)}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
      sx={{
        display: "flex",
        gap: 2.5,
        pb: isLast ? 0 : 3.5,
        borderRadius: 3,
        px: 0.5,
        "&:hover .timeline-node": {
          boxShadow: `0 0 36px ${alpha(theme.palette.primary.main, 0.65)}`,
          backgroundColor: alpha(theme.palette.primary.main, 0.85),
          borderColor: alpha(theme.palette.primary.light, 0.85),
        },
        "&:hover .timeline-title": {
          color: "text.primary",
        },
        "&:hover .timeline-period": {
          color: "primary.main",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 18,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          className="timeline-node"
          sx={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: `2px solid ${alpha(theme.palette.primary.main, 0.55)}`,
            backgroundColor: alpha(theme.palette.primary.main, 0.22),
            boxShadow: `0 0 14px ${alpha(theme.palette.primary.main, 0.25)}`,
            zIndex: 1,
            mt: 0.5,
            transition: "all 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
          }}
        />
        {!isLast && (
          <Box
            sx={{
              position: "absolute",
              top: 16,
              bottom: -28,
              width: 2,
              background: alpha(theme.palette.primary.main, 0.42),
            }}
          />
        )}
      </Box>

      <Box
        className="timeline-content"
        sx={{
          flex: 1,
          transition: "transform 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
          willChange: "transform",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Box>
            <Typography
              className="timeline-title"
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: alpha(theme.palette.text.primary, 0.78),
                transition: "color 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              {institution}
            </Typography>
          </Box>

          <Typography
            className="timeline-period"
            variant="caption"
            sx={{
              color: alpha(theme.palette.text.primary, 0.55),
              letterSpacing: 0.6,
              textTransform: "uppercase",
              transition: "color 0.25s ease",
            }}
          >
            {period}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationCard;
