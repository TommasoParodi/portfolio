import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

const ProjectsSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Box data-section="projects">
      <Typography
        component={motion.h3}
        variant="h4"
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
        variants={reduceMotion ? undefined : fadeUp(0)}
        sx={{
          mb: 3,
          color: "text.primary",
          fontWeight: 600,
        }}
      >
        Featured Projects
      </Typography>

      <Box
        component={motion.div}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
        variants={reduceMotion ? undefined : stagger}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            name={project.name}
            slug={project.slug}
            description={project.description}
            github={project.github}
            deploy={project.deploy}
            languages={project.languages}
            images={project.images}
            index={index}
            isLast={index === projectsData.projects.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;

