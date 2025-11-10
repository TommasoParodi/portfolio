import React from "react";
import { Box, Chip } from "@mui/material";

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          mt: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(255, 107, 53, 0.15)",
                transform: "scale(1.05)",
              },
              transition: "all 0.2s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
