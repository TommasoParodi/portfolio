import React from "react";
import { Box, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <Box>
      <Box
        component={motion.div}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
        variants={reduceMotion ? undefined : stagger}
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
            component={motion.span}
            variants={reduceMotion ? undefined : fadeUp(index * 0.02)}
            variant="body2"
            sx={{
              color: alpha(theme.palette.text.primary, 0.74),
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
                  color: alpha(theme.palette.text.primary, 0.28),
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
