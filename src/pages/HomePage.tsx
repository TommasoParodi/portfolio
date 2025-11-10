import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Hero from "../components/Hero";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import SkillsSection from "../components/SkillsSection";

const HomePage: React.FC = () => {
  // Hardcoded data for work experiences
  const experiences = [
    {
      logo: "/api/placeholder/80/80", // Placeholder for now
      role: "Frontend Developer",
      company: "ERMIT",
      description:
        "Developed responsive front-end applications using Angular and integrated RESTful APIs and WebSocket services. Built an AI-powered chatbot with React and Langchain. Contributed to bug fixing, performance optimization, and UI/UX improvements. Participated in agile processes and created reusable components.",
      period: "Mar 2024 - Present",
    },
    {
      logo: "/api/placeholder/80/80", // Placeholder for now
      role: "Machine Learning Engineer",
      company: "ENGIE",
      description:
        "Developed machine learning models for data validation on gas storage sites. Conducted data analysis to identify inconsistencies in large datasets. Automated validation processes, improving efficiency and reducing measurement errors. Documented models and processes for reproducibility.",
      period: "Feb 2023 - Aug 2023",
    },
  ];

  // Hardcoded data for education
  const education = [
    {
      title: "Master's degree in Machine Learning and Optimization of Complex Systems",
      institution: "Université de Technologie de Compiègne (France)",
      period: "2022 - 2023",
    },
    {
      title: "Master's degree in Computer Engineering, Artificial Intelligence and Human-centered computing",
      institution: "Università degli studi di Genova (Italy)",
      period: "2021 - 2024",
    },
    {
      title: "Bachelor's Degree in Computer Engineering",
      institution: "Università degli studi di Genova (Italy)",
      period: "2018 - 2021",
    },
  ];

  // Hardcoded data for skills
  const skills = [
    "Angular",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "NestJS",
    "LangchainJS",
    "NodeJS",
    "ExpressJS",
    "SQL",
    "Python",
    "C++",
    "PHP",
    "Docker",
  ];

  return (
    <Container maxWidth="lg">
      <Hero />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Left column - Work Experience */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Work Experience
          </Typography>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              logo={experience.logo}
              role={experience.role}
              company={experience.company}
              description={experience.description}
              period={experience.period}
            />
          ))}

          {/* Key Skills Section */}
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: "text.primary",
                fontWeight: 600,
              }}
            >
              Key Skills
            </Typography>

            <SkillsSection skills={skills} />
          </Box>
        </Grid>

        {/* Right column - Education */}
        <Grid size={{ xs: 12, md: 5 }}>
          {/* Education Section */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: "text.primary",
                fontWeight: 600,
              }}
            >
              Education
            </Typography>

            {education.map((edu, index) => (
              <EducationCard
                key={index}
                title={edu.title}
                institution={edu.institution}
                period={edu.period}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
