import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectsSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <Box ref={elementRef} data-section="projects">
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          color: "text.primary",
          fontWeight: 600,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
        }}
      >
        Featured Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            github={project.github}
            deploy={project.deploy}
            languages={project.languages}
            index={index}
            isLast={index === projectsData.projects.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;

