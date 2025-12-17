import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Hero from "../components/Hero";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <Typography
      ref={elementRef}
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
      {title}
    </Typography>
  );
};

const HomePage: React.FC = () => {
  // Hardcoded data for work experiences
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ERMIT",
      description:
        "Developed responsive front-end applications using Angular and integrated RESTful APIs and WebSocket services. Built an AI-powered chatbot with React and Langchain. Contributed to bug fixing, performance optimization, and UI/UX improvements. Participated in agile processes and created reusable components.",
      period: "Mar 2024 - Present",
    },
    {
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
    <>
      <Hero />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: {
              xs: 8,
              md: 10,
            },
          }}
        >
          <ProjectsSection />
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: {
              xs: 8,
              md: 10,
            },
          }}
        >
          <Box>
            <SectionTitle title="Work Experience" />
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                role={experience.role}
                company={experience.company}
                description={experience.description}
                period={experience.period}
                isLast={index === experiences.length - 1}
                index={index}
              />
            ))}
          </Box>

          <Box>
            <SectionTitle title="Education" />
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                title={edu.title}
                institution={edu.institution}
                period={edu.period}
                isLast={index === education.length - 1}
                index={index}
              />
            ))}
          </Box>

          <Box>
            <SectionTitle title="Key Skills" />
            <SkillsSection skills={skills} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
