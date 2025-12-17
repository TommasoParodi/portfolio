import React from "react";
import { Box, Typography } from "@mui/material";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <Box ref={elementRef}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          mt: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.68)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96) ${
                index * 0.05
              }s`,
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {skill}
            {index < skills.length - 1 && (
              <Box
                component="span"
                sx={{
                  mx: 1,
                  color: "rgba(255, 255, 255, 0.3)",
                }}
              >
                •
              </Box>
            )}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
