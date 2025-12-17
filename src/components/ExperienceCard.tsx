import React from "react";
import { Box, Typography } from "@mui/material";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ExperienceCardProps {
  role: string;
  company: string;
  description: string;
  period: string;
  isLast?: boolean;
  index?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  description,
  period,
  isLast = false,
  index = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px",
  });

  return (
    <Box
      ref={elementRef}
      className="timeline-card"
      sx={{
        display: "flex",
        gap: 2.5,
        pb: isLast ? 0 : 3.5,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-30px)",
        transition: `all 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96) ${index * 0.15}s`,
        transitionProperty: "color, box-shadow, opacity, transform",
        "&:hover .timeline-content": {
          transform: "translateX(4px)",
        },
        "&:hover .timeline-node": {
          boxShadow: "0 0 24px rgba(255, 107, 53, 0.95)",
          backgroundColor: "rgba(255, 107, 53, 0.9)",
          borderColor: "rgba(255, 180, 140, 0.9)",
        },
        "&:hover .timeline-title": {
          color: "text.primary",
        },
        "&:hover .timeline-period": {
          color: "primary.main",
        },
        "&:hover .timeline-description": {
          color: "rgba(255, 255, 255, 0.85)",
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
            border: "2px solid rgba(255, 107, 53, 0.65)",
            backgroundColor: "rgba(255, 107, 53, 0.25)",
            boxShadow: "0 0 10px rgba(255, 107, 53, 0.35)",
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
              background: "rgba(255, 107, 53, 0.45)",
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
                color: "rgba(255, 255, 255, 0.75)",
                transition: "color 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
              }}
            >
              {role}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              {company}
            </Typography>
          </Box>

          <Typography
            className="timeline-period"
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              letterSpacing: 0.6,
              textTransform: "uppercase",
              transition: "color 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
            }}
          >
            {period}
          </Typography>
        </Box>

        <Typography
          className="timeline-description"
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.68)",
            lineHeight: 1.8,
            mt: 1.5,
            transition: "color 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
